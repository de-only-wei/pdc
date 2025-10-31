"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    const res = await fetch("/api/settings");
    const data = await res.json();
    setSettings(data);
  }

  async function saveSettings() {
    setSaving(true);
    setMessage("");

    try {
      await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      setMessage("Settings saved successfully!");
    } catch (error) {
      setMessage("Failed to save settings");
    } finally {
      setSaving(false);
    }
  }

  if (!settings) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#2d3748]">Settings</h1>
          <p className="text-[#4a5568]">Manage website configuration</p>
        </div>
        <Button onClick={saveSettings} variant="gold" disabled={saving}>
          <Save className="mr-2" size={18} />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {message && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-800">
          {message}
        </div>
      )}

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <Input
                value={settings.company.name}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    company: { ...settings.company, name: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tagline</label>
              <Input
                value={settings.company.tagline}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    company: { ...settings.company, tagline: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <Textarea
                value={settings.company.description}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    company: {
                      ...settings.company,
                      description: e.target.value,
                    },
                  })
                }
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <Textarea
                value={settings.contact.address}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    contact: { ...settings.contact, address: e.target.value },
                  })
                }
                rows={3}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  value={settings.contact.phone}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      contact: { ...settings.contact, phone: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Office</label>
                <Input
                  value={settings.contact.office}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      contact: { ...settings.contact, office: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Primary Email
                </label>
                <Input
                  value={settings.contact.email}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      contact: { ...settings.contact, email: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Secondary Email
                </label>
                <Input
                  value={settings.contact.emailAlt}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      contact: {
                        ...settings.contact,
                        emailAlt: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Years Experience
                </label>
                <Input
                  value={settings.stats.yearsExperience}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      stats: {
                        ...settings.stats,
                        yearsExperience: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Projects Completed
                </label>
                <Input
                  value={settings.stats.projectsCompleted}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      stats: {
                        ...settings.stats,
                        projectsCompleted: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Satisfaction
                </label>
                <Input
                  value={settings.stats.clientSatisfaction}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      stats: {
                        ...settings.stats,
                        clientSatisfaction: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Expert Team
                </label>
                <Input
                  value={settings.stats.expertTeam}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      stats: { ...settings.stats, expertTeam: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


