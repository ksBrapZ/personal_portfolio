// queryClient.ts - API request handling and caching configuration
// This file sets up the central data fetching and caching system using TanStack Query
// It provides consistent error handling and request formatting across the application

import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Helper function to check and handle API error responses
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Generic API request function for making HTTP requests
// Handles request formatting and error checking consistently
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",  // Include cookies for authentication
  });

  await throwIfResNotOk(res);
  return res;
}

// Type for handling unauthorized responses
type UnauthorizedBehavior = "returnNull" | "throw";

// Query function factory for handling data fetching
// Configurable handling of unauthorized (401) responses
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

// Main query client configuration
// Sets up global defaults for data fetching behavior
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),  // Default to throwing on 401
      refetchInterval: false,                    // Don't automatically refetch
      refetchOnWindowFocus: false,              // Don't refetch when window regains focus
      staleTime: Infinity,                      // Data never becomes stale automatically
      retry: false,                             // Don't retry failed requests
    },
    mutations: {
      retry: false,                             // Don't retry failed mutations
    },
  },
});