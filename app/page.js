"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  ClipboardCheck,
  PenTool,
  Home,
  Lightbulb,
  Wrench,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";

export default function HomePage() {
  const [featuredProject, setFeaturedProject] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch projects and find featured one
        const projectsRes = await fetch("/api/projects");
        const projects = await projectsRes.json();
        const featured = projects.find((p) => p.featured) || projects[0];
        setFeaturedProject(featured);

        // Fetch testimonials
        const testimonialsRes = await fetch("/api/testimonials");
        const testimonialsData = await testimonialsRes.json();
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-[#d4a574] flex items-center justify-center text-white font-bold text-3xl shadow-2xl">
              PDC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Prosper Dynamic Construction
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Building Your Vision with Excellence and Integrity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" variant="gold" className="text-lg px-8 py-6">
                View Our Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur border-white text-white hover:bg-white hover:text-[#2d3748]"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                  About Us
                </h2>
                <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                  Prosper Dynamics Construction Sdn Bhd is a professional
                  construction company committed to delivering high-quality
                  projects with integrity, innovation, and excellence. With
                  years of experience in the industry, we specialize in bungalow
                  construction, project management, and comprehensive
                  design-build solutions.
                </p>
                <p className="text-lg text-[#4a5568] mb-6 leading-relaxed">
                  Our team of skilled professionals works closely with clients,
                  architects, and consultants to bring visions to life, ensuring
                  every project meets the highest standards of quality and
                  craftsmanship.
                </p>
                <Link href="/about">
                  <Button variant="gold" size="lg">
                    Learn More About Us
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              Our Core Values
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12 max-w-3xl mx-auto">
              These principles guide everything we do
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-[#d4a574] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4">
                    <Star size={32} />
                  </div>
                  <CardTitle className="text-2xl">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568]">
                    We are committed to delivering superior workmanship and
                    using only the best materials in every project.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#d4a574] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4">
                    <ClipboardCheck size={32} />
                  </div>
                  <CardTitle className="text-2xl">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568]">
                    Transparency, honesty, and ethical practices are at the
                    heart of our business operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#d4a574] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4">
                    <Lightbulb size={32} />
                  </div>
                  <CardTitle className="text-2xl">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568]">
                    We believe in working closely with clients, architects, and
                    stakeholders to achieve shared success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              Our Services
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white mb-3 group-hover:bg-[#d4a574] transition-colors">
                    <Home size={28} />
                  </div>
                  <CardTitle>Bungalow Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Specialized in building luxurious, custom bungalows from
                    concept to completion.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white mb-3 group-hover:bg-[#d4a574] transition-colors">
                    <ClipboardCheck size={28} />
                  </div>
                  <CardTitle>Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Expert oversight ensuring projects are delivered on time and
                    within budget.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white mb-3 group-hover:bg-[#d4a574] transition-colors">
                    <PenTool size={28} />
                  </div>
                  <CardTitle>Design and Build</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Seamless integration of design and construction for
                    efficient project delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white mb-3 group-hover:bg-[#d4a574] transition-colors">
                    <Wrench size={28} />
                  </div>
                  <CardTitle>Renovation Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Transform and modernize existing spaces with expert
                    renovation services.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                >
                  View All Services
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-[#2d3748] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Featured Project
            </h2>
            <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              A showcase of our latest work
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {featuredProject ? (
                <>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url('${featuredProject.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold mb-4">
                      {featuredProject.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      <strong>Location:</strong> {featuredProject.location}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong>Architect:</strong> {featuredProject.architect}
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong>Value:</strong> {featuredProject.value}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>
                    <p className="text-gray-300 mb-6">
                      <strong>Completion:</strong> {featuredProject.completion}
                    </p>
                  </div>
                </>
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-300">Loading featured project...</p>
                </div>
              )}
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio">
                <Button variant="gold" size="lg">
                  View Full Portfolio
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12 max-w-3xl mx-auto">
              Trusted by architects and homeowners across Malaysia
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.length > 0 ? (
                testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <Quote className="text-[#d4a574] mb-4" size={40} />
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-[#d4a574] fill-[#d4a574]"
                            size={18}
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#4a5568] mb-4 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="border-t pt-4">
                        <p className="font-semibold text-[#2d3748]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[#4a5568]">
                          {testimonial.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-[#4a5568]">Loading testimonials...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can bring your vision to life with our expert
              construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="gold" className="text-lg px-8 py-6">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#1e3a5f]"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
