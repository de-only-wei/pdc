"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MapPin, User, DollarSign, Calendar } from "lucide-react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Fallback hardcoded projects (backup)
  const fallbackProjects = [
    {
      id: 1,
      title: "The Hillside Villa",
      location: "Kota Kemuning, Shah Alam",
      category: "current",
      architect: "Premier Design Architects",
      value: "RM 2.8M",
      completion: "December 2024",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070",
      description:
        "A stunning contemporary bungalow featuring modern architectural design, luxurious finishes, and sustainable building practices.",
    },
    {
      id: 2,
      title: "Serenity Gardens Residence",
      location: "Bukit Jelutong, Shah Alam",
      category: "current",
      architect: "Tropical Design Studio",
      value: "RM 3.2M",
      completion: "March 2025",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      description:
        "Luxurious tropical-modern bungalow with expansive gardens, water features, and premium interior finishes.",
    },
    {
      id: 3,
      title: "Urban Oasis Bungalow",
      location: "Setia Alam, Selangor",
      category: "current",
      architect: "Modern Living Architects",
      value: "RM 2.5M",
      completion: "January 2025",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      description:
        "Contemporary design with smart home integration, minimalist aesthetics, and eco-friendly construction materials.",
    },
    {
      id: 4,
      title: "Heritage Manor",
      location: "Damansara Heights, KL",
      category: "previous",
      architect: "Classic Design Associates",
      value: "RM 4.5M",
      completion: "Completed June 2023",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084",
      description:
        "Elegant colonial-style bungalow renovation with modern amenities while preserving historical architectural elements.",
    },
    {
      id: 5,
      title: "Skyline Residence",
      location: "Mont Kiara, KL",
      category: "previous",
      architect: "Urban Space Design",
      value: "RM 5.2M",
      completion: "Completed September 2022",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
      description:
        "Ultra-modern luxury bungalow with panoramic city views, infinity pool, and state-of-the-art home automation.",
    },
    {
      id: 6,
      title: "Riverside Sanctuary",
      location: "Ara Damansara, Selangor",
      category: "previous",
      architect: "Nature First Architects",
      value: "RM 3.8M",
      completion: "Completed March 2023",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      description:
        "Tranquil bungalow design incorporating natural elements, landscaped gardens, and sustainable energy solutions.",
    },
    {
      id: 7,
      title: "The Executive Suite",
      location: "Subang Jaya, Selangor",
      category: "previous",
      architect: "Elite Design Studio",
      value: "RM 2.9M",
      completion: "Completed November 2022",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087",
      description:
        "Professional home office integration with luxury living spaces, perfect for modern executives.",
    },
    {
      id: 8,
      title: "Green Valley Estate",
      location: "Cyberjaya, Selangor",
      category: "previous",
      architect: "Eco Build Architects",
      value: "RM 3.5M",
      completion: "Completed August 2023",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
      description:
        "Environmentally conscious design with solar panels, rainwater harvesting, and energy-efficient systems.",
    },
    {
      id: 9,
      title: "Peninsula Parkview",
      location: "Bangsar, KL",
      category: "previous",
      architect: "Metropolitan Designs",
      value: "RM 6.1M",
      completion: "Completed January 2023",
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070",
      description:
        "Premium bungalow with park-facing views, luxury amenities, and bespoke interior craftsmanship.",
    },
  ];

  // Use CMS data if available, otherwise use fallback
  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

  const filteredProjects =
    filter === "all"
      ? displayProjects
      : displayProjects.filter((project) => project.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e3a5f] mx-auto mb-4"></div>
          <p className="text-[#4a5568]">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2d3748] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-200">
              Explore our collection of exceptional construction projects
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setFilter("all")}
                variant={filter === "all" ? "default" : "outline"}
                size="lg"
                className={filter === "all" ? "bg-[#1e3a5f]" : ""}
              >
                All Projects
              </Button>
              <Button
                onClick={() => setFilter("current")}
                variant={filter === "current" ? "default" : "outline"}
                size="lg"
                className={filter === "current" ? "bg-[#1e3a5f]" : ""}
              >
                Current Projects
              </Button>
              <Button
                onClick={() => setFilter("previous")}
                variant={filter === "previous" ? "default" : "outline"}
                size="lg"
                className={filter === "previous" ? "bg-[#1e3a5f]" : ""}
              >
                Previous Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${project.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.category === "current"
                            ? "bg-green-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {project.category === "current"
                          ? "In Progress"
                          : "Completed"}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-[#1e3a5f] transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="flex items-center text-[#4a5568]">
                      <MapPin size={16} className="mr-1" />
                      {project.location}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-[#4a5568] mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-[#4a5568]">
                        <User size={16} className="mr-2 text-[#d4a574]" />
                        <span>
                          <strong>Architect:</strong> {project.architect}
                        </span>
                      </div>
                      <div className="flex items-center text-[#4a5568]">
                        <DollarSign size={16} className="mr-2 text-[#d4a574]" />
                        <span>
                          <strong>Value:</strong> {project.value}
                        </span>
                      </div>
                      <div className="flex items-center text-[#4a5568]">
                        <Calendar size={16} className="mr-2 text-[#d4a574]" />
                        <span>{project.completion}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-[#4a5568]">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-12">
              Our Track Record
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#d4a574] mb-2">
                  200+
                </div>
                <div className="text-lg text-[#4a5568]">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#d4a574] mb-2">
                  RM 500M+
                </div>
                <div className="text-lg text-[#4a5568]">
                  Total Contract Value
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#d4a574] mb-2">
                  98%
                </div>
                <div className="text-lg text-[#4a5568]">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#d4a574] mb-2">
                  100%
                </div>
                <div className="text-lg text-[#4a5568]">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl text-[#2d3748] italic mb-6">
                "Prosper Dynamic Construction has consistently delivered
                exceptional quality on all our projects. Their professionalism,
                attention to detail, and commitment to excellence make them our
                preferred construction partner."
              </p>
              <footer className="text-lg">
                <strong className="text-[#1e3a5f]">Michael Tan</strong>
                <br />
                <span className="text-[#4a5568]">
                  Principal Architect, Premier Design Architects
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss your project and explore how we can bring your
              vision to life.
            </p>
            <Button
              size="lg"
              variant="gold"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href="/contact">Start Your Project Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
