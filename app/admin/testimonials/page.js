"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Save, X, Star } from "lucide-react";

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    setTestimonials(data);
  }

  function startNew() {
    setEditing("new");
    setFormData({
      name: "",
      title: "",
      content: "",
      rating: 5,
    });
  }

  function startEdit(testimonial) {
    setEditing(testimonial.id);
    setFormData(testimonial);
  }

  function cancelEdit() {
    setEditing(null);
    setFormData({});
  }

  async function saveTestimonial() {
    try {
      if (editing === "new") {
        await fetch("/api/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      fetchTestimonials();
      cancelEdit();
    } catch (error) {
      alert("Failed to save testimonial");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#2d3748]">Testimonials</h1>
          <p className="text-[#4a5568]">Manage client testimonials</p>
        </div>
        <Button onClick={startNew} variant="gold">
          <Plus className="mr-2" size={18} />
          Add Testimonial
        </Button>
      </div>

      {editing && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              {editing === "new" ? "New Testimonial" : "Edit Testimonial"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Title/Company
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Testimonial Content
                </label>
                <Textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-input"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rating: parseInt(e.target.value),
                    })
                  }
                >
                  {[1, 2, 3, 4, 5].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button onClick={saveTestimonial} variant="gold">
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

      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-[#d4a574] fill-[#d4a574]"
                    size={18}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mb-4">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-3">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
              <Button
                onClick={() => startEdit(testimonial)}
                variant="outline"
                size="sm"
                className="mt-3"
              >
                <Edit size={16} className="mr-2" />
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


