// AdminPage.tsx - Main admin dashboard container
// This component serves as the wrapper for the admin interface
// It provides the layout and structure for the admin dashboard

import { Admin } from "@/components/ui/Admin";

export default function AdminPage() {
  return (
    // Full-height container with background styling
    <div className="min-h-screen bg-background">
      {/* Content container with padding and max width */}
      <div className="container mx-auto py-8">
        {/* Dashboard header */}
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        {/* Main admin interface component */}
        <Admin />
      </div>
    </div>
  );
}