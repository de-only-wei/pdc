"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
    { href: "/admin/team", label: "Team", icon: Users },
    { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquare },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <nav className="w-64 bg-[#2d3748] text-white min-h-screen p-6 fixed left-0 top-0 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">PDC CMS</h1>
        <p className="text-sm text-gray-400">Content Management</p>
      </div>

      <div className="space-y-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-[#d4a574] text-white"
                  : "hover:bg-[#1e3a5f]"
              )}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-600">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-white hover:bg-[#1e3a5f] hover:text-white"
        >
          <LogOut size={20} className="mr-3" />
          Logout
        </Button>
      </div>
    </nav>
  );
}
