"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";

export default function ProjectsManagement() {
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  }

  function startEdit(project) {
    setEditing(project.id);
    setFormData(project);
  }

  function startNew() {
    setEditing("new");
    setFormData({
      title: "",
      location: "",
      category: "current",
      architect: "",
      value: "",
      completion: "",
      image: "",
      description: "",
      featured: false,
    });
  }

  function cancelEdit() {
    setEditing(null);
    setFormData({});
  }

  async function saveProject() {
    try {
      if (editing === "new") {
        await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch(`/api/projects/${editing}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      fetchProjects();
      cancelEdit();
    } catch (error) {
      alert("Failed to save project");
    }
  }

  async function deleteProject(id) {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      fetchProjects();
    } catch (error) {
      alert("Failed to delete project");
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#2d3748] mb-2">Projects</h1>
          <p className="text-lg text-[#4a5568]">
            Manage your portfolio projects
          </p>
        </div>
        <Button onClick={startNew} variant="gold">
          <Plus className="mr-2" size={18} />
          Add Project
        </Button>
      </div>

      {editing && (
        <Card className="mb-8 shadow-lg">
          <CardHeader className="border-b pb-4">
            <CardTitle className="text-2xl">
              {editing === "new" ? "New Project" : "Edit Project"}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Location
                </label>
                <Input
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="current">Current</option>
                  <option value="previous">Previous</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Architect
                </label>
                <Input
                  value={formData.architect}
                  onChange={(e) =>
                    setFormData({ ...formData, architect: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Value</label>
                <Input
                  value={formData.value}
                  onChange={(e) =>
                    setFormData({ ...formData, value: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Completion
                </label>
                <Input
                  value={formData.completion}
                  onChange={(e) =>
                    setFormData({ ...formData, completion: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Image URL
                </label>
                <Input
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                  />
                  <span className="text-sm font-medium">Featured Project</span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-8 pt-6 border-t">
              <Button onClick={saveProject} variant="gold">
                <Save className="mr-2" size={18} />
                Save
              </Button>
              <Button onClick={cancelEdit} variant="outline">
                <X className="mr-2" size={18} />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.location}</p>
                  <p className="text-sm mt-2">{project.description}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span className="text-gray-600">
                      <strong>Architect:</strong> {project.architect}
                    </span>
                    <span className="text-gray-600">
                      <strong>Value:</strong> {project.value}
                    </span>
                    <span className="text-gray-600">
                      <strong>Category:</strong>{" "}
                      <span
                        className={
                          project.category === "current"
                            ? "text-green-600"
                            : "text-blue-600"
                        }
                      >
                        {project.category}
                      </span>
                    </span>
                    {project.featured && (
                      <span className="text-[#d4a574] font-semibold">
                        ★ Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => startEdit(project)}
                    variant="outline"
                    size="sm"
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    onClick={() => deleteProject(project.id)}
                    variant="destructive"
                    size="sm"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
