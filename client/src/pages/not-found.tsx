// not-found.tsx - Custom 404 error page
// This component displays when users try to access a non-existent page
// It provides a clear error message and uses the AlertCircle icon for visual feedback

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    // Full-screen centered container with light background
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      {/* Error message card with responsive width */}
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          {/* Error header with icon */}
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          {/* Helpful message for developers */}
          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}