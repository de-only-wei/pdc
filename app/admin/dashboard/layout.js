import AdminNav from "@/components/AdminNav";

export const metadata = {
  title: "Admin Dashboard - Prosper Dynamic Construction",
  description: "Content Management System",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <main className="ml-64 p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
