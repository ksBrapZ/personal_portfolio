import { Admin } from "@/components/ui/Admin";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <Admin />
      </div>
    </div>
  );
}
