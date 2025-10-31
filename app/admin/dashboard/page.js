"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderKanban, Users, MessageSquare, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    team: 0,
    testimonials: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [projects, team, testimonials] = await Promise.all([
          fetch("/api/projects").then((r) => r.json()),
          fetch("/api/team").then((r) => r.json()),
          fetch("/api/testimonials").then((r) => r.json()),
        ]);

        setStats({
          projects: projects.length,
          team: team.length,
          testimonials: testimonials.length,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#2d3748] mb-2">Dashboard</h1>
        <p className="text-lg text-[#4a5568]">
          Welcome to your content management system
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Projects
            </CardTitle>
            <FolderKanban className="text-[#d4a574]" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.projects}</div>
            <p className="text-xs text-muted-foreground">Portfolio items</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="text-[#d4a574]" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.team}</div>
            <p className="text-xs text-muted-foreground">Active members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
            <MessageSquare className="text-[#d4a574]" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.testimonials}</div>
            <p className="text-xs text-muted-foreground">Client reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Website Status
            </CardTitle>
            <TrendingUp className="text-green-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Online</div>
            <p className="text-xs text-muted-foreground">
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a
              href="/admin/projects"
              className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <strong>Manage Projects</strong>
              <p className="text-sm text-gray-600">
                Add, edit, or remove portfolio projects
              </p>
            </a>
            <a
              href="/admin/team"
              className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <strong>Manage Team</strong>
              <p className="text-sm text-gray-600">
                Update team member profiles
              </p>
            </a>
            <a
              href="/admin/testimonials"
              className="block p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <strong>Manage Testimonials</strong>
              <p className="text-sm text-gray-600">
                Add or edit client reviews
              </p>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm font-medium">CMS Version</p>
              <p className="text-sm text-gray-600">1.0.0</p>
            </div>
            <div>
              <p className="text-sm font-medium">Last Updated</p>
              <p className="text-sm text-gray-600">
                {new Date().toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Data Storage</p>
              <p className="text-sm text-gray-600">JSON Files (Local)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
