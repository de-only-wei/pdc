"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";

export default function TeamManagement() {
  const [team, setTeam] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchTeam();
  }, []);

  async function fetchTeam() {
    const res = await fetch("/api/team");
    const data = await res.json();
    setTeam(data);
  }

  function startNew() {
    setEditing("new");
    setFormData({
      name: "",
      position: "",
      email: "",
      bio: "",
      image: "",
      featured: true,
    });
  }

  function startEdit(member) {
    setEditing(member.id);
    setFormData(member);
  }

  function cancelEdit() {
    setEditing(null);
    setFormData({});
  }

  async function saveMember() {
    try {
      if (editing === "new") {
        await fetch("/api/team", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      fetchTeam();
      cancelEdit();
    } catch (error) {
      alert("Failed to save team member");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#2d3748]">Team</h1>
          <p className="text-[#4a5568]">Manage team members</p>
        </div>
        <Button onClick={startNew} variant="gold">
          <Plus className="mr-2" size={18} />
          Add Team Member
        </Button>
      </div>

      {editing && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              {editing === "new" ? "New Team Member" : "Edit Team Member"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Position
                </label>
                <Input
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
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
                <label className="block text-sm font-medium mb-2">Bio</label>
                <Textarea
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
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
                  <span className="text-sm font-medium">
                    Show on About page
                  </span>
                </label>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={saveMember} variant="gold">
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
        {team.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-[#d4a574]">{member.position}</p>
                  <p className="text-sm mt-2 text-gray-600">{member.bio}</p>
                  {member.featured && (
                    <span className="text-sm text-green-600 font-semibold mt-2 inline-block">
                      ✓ Featured on About page
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => startEdit(member)}
                    variant="outline"
                    size="sm"
                  >
                    <Edit size={16} />
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


