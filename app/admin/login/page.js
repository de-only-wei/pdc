"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#223247] to-[#1b2b3f] p-6">
      <Card className="w-full max-w-md bg-white/98 shadow-2xl border border-gray-200">
        <CardHeader className="text-center space-y-3">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full bg-[#d4a574] flex items-center justify-center shadow-md">
              <Lock className="text-white" size={32} />
            </div>
          </div>
          <CardTitle className="text-3xl font-extrabold text-[#1f2937]">
            Admin Login
          </CardTitle>
          <p className="text-sm text-gray-500">
            Prosper Dynamic Construction CMS
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
                placeholder="Enter username"
                className="h-12 border-gray-300 placeholder:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                placeholder="Enter password"
                className="h-12 border-gray-300 placeholder:text-gray-400"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#1e3a5f] hover:bg-[#182a45] h-12 text-base font-semibold text-white"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong className="font-semibold">Default credentials:</strong>
              <br />
              <span className="inline-block mt-2">
                <strong>Username:</strong> admin
              </span>
              <br />
              <span className="inline-block">
                <strong>Password:</strong> admin123
              </span>
              <br />
              <br />
              <span className="text-xs text-blue-700">
                ⚠️ Change these in production!
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
