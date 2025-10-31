import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Users,
  Target,
  Star,
  ClipboardCheck,
  Lightbulb,
  Shield,
  TrendingUp,
  Mail,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us - Prosper Dynamic Construction",
  description:
    "Learn about Prosper Dynamic Construction, our mission, values, and experienced team members.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2d3748] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200">
              Building Excellence Through Integrity, Innovation, and
              Collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-[#2d3748] mb-6">
                  Company Overview
                </h2>
                <div className="space-y-4 text-lg text-[#4a5568] leading-relaxed">
                  <p>
                    <strong className="text-[#1e3a5f]">
                      Prosper Dynamics Construction Sdn Bhd
                    </strong>{" "}
                    is a professional construction company committed to
                    delivering high-quality projects with integrity, innovation,
                    and excellence. Established with a vision to become a
                    leading name in the construction industry, we specialize in
                    residential and commercial construction, project management,
                    and comprehensive design-build solutions.
                  </p>
                  <p>
                    With years of experience in the industry, our team of
                    skilled professionals works closely with clients,
                    architects, and consultants to bring visions to life. We
                    pride ourselves on our ability to manage complex projects
                    efficiently while maintaining the highest standards of
                    quality and craftsmanship.
                  </p>
                  <p>
                    Our company is built on a foundation of trust, reliability,
                    and customer satisfaction. From initial consultation to
                    project completion, we ensure transparent communication,
                    adherence to timelines, and budget-conscious execution that
                    exceeds expectations.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-t-4 border-t-[#d4a574]">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4">
                    <Target size={32} />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] leading-relaxed">
                    To deliver exceptional construction services that exceed
                    client expectations through innovation, quality
                    craftsmanship, and unwavering commitment to excellence. We
                    strive to build lasting relationships based on trust,
                    integrity, and outstanding results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-[#d4a574]">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4">
                    <TrendingUp size={32} />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] leading-relaxed">
                    To be recognized as Malaysia's premier construction company,
                    setting industry standards for quality, innovation, and
                    customer satisfaction. We aim to create lasting value for
                    our clients while contributing positively to the communities
                    we serve.
                  </p>
                </CardContent>
              </Card>
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
              The principles that guide every decision and action we take
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-20 w-20 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4 mx-auto">
                    <Star size={40} />
                  </div>
                  <CardTitle className="text-2xl">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] leading-relaxed">
                    We are committed to delivering superior workmanship and
                    using only the best materials in every project. Our
                    dedication to quality ensures that every structure we build
                    stands the test of time.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-20 w-20 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4 mx-auto">
                    <Shield size={40} />
                  </div>
                  <CardTitle className="text-2xl">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] leading-relaxed">
                    Transparency, honesty, and ethical practices are at the
                    heart of our business operations. We build trust through
                    consistent, reliable service and open communication with all
                    stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-20 w-20 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mb-4 mx-auto">
                    <Users size={40} />
                  </div>
                  <CardTitle className="text-2xl">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] leading-relaxed">
                    We believe in working closely with clients, architects, and
                    stakeholders to achieve shared success. Teamwork and
                    partnership are fundamental to delivering exceptional
                    results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Personnel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12 max-w-3xl mx-auto">
              Meet the experienced professionals driving our success
            </p>

            {/* Featured: Mr. Tan Chau */}
            <div className="mb-12 bg-gradient-to-br from-[#f7fafc] to-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative h-64 w-64 mx-auto rounded-lg overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#2d3748] flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl font-bold mb-2">TC</div>
                        <p className="text-sm">Managing Director</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-[#2d3748] mb-2">
                      Mr. Tan Chau
                    </h3>
                    <p className="text-xl text-[#d4a574] font-semibold mb-4">
                      Managing Director & Founder
                    </p>
                    <div className="flex items-center space-x-2 text-[#4a5568] mb-4">
                      <Mail size={18} />
                      <span>Available for consultation</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-[#4a5568] leading-relaxed">
                    <p>
                      <strong className="text-[#1e3a5f]">Mr. Tan Chau</strong>{" "}
                      is the visionary founder and Managing Director of Prosper
                      Dynamics Construction Sdn Bhd. With over 25 years of
                      extensive experience in the construction industry, he has
                      established himself as a respected leader known for his
                      technical expertise, strategic thinking, and unwavering
                      commitment to quality.
                    </p>
                    <p>
                      Under his leadership, the company has successfully
                      completed numerous high-profile residential and commercial
                      projects across Malaysia. Mr. Tan's hands-on approach and
                      dedication to excellence have earned the company a
                      reputation for reliability and superior craftsmanship.
                    </p>
                    <p>
                      His expertise spans project planning, construction
                      management, quality control, and client relations. Mr. Tan
                      believes in fostering long-term relationships with
                      clients, architects, and consultants, ensuring that every
                      project is executed with precision and professionalism.
                    </p>
                    <p className="font-semibold text-[#1e3a5f]">
                      "Building is not just about structures; it's about
                      creating spaces where dreams come to life and memories are
                      made."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Team Members */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#4a5568] to-[#2d3748]">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">JL</div>
                        <p className="text-sm">Senior Architect</p>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">James Lim</CardTitle>
                  <p className="text-[#d4a574] font-semibold">
                    Senior Architect
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] text-sm leading-relaxed">
                    With 15 years of architectural experience, James leads our
                    design team in creating innovative, functional, and
                    aesthetically pleasing structures. His expertise in modern
                    sustainable design has been instrumental in our
                    award-winning projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#4a5568] to-[#2d3748]">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">MW</div>
                        <p className="text-sm">Project Manager</p>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">Michelle Wong</CardTitle>
                  <p className="text-[#d4a574] font-semibold">
                    Senior Project Manager
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] text-sm leading-relaxed">
                    Michelle brings 12 years of project management expertise,
                    ensuring every project is delivered on time and within
                    budget. Her meticulous planning and coordination skills have
                    made her invaluable to our operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#4a5568] to-[#2d3748]">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">RK</div>
                        <p className="text-sm">Site Engineer</p>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">Rajesh Kumar</CardTitle>
                  <p className="text-[#d4a574] font-semibold">
                    Lead Site Engineer
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#4a5568] text-sm leading-relaxed">
                    Rajesh oversees on-site operations with 18 years of hands-on
                    construction experience. His technical knowledge and
                    problem-solving abilities ensure smooth execution and
                    quality control at every construction phase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              Organizational Structure
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12">
              Our hierarchical structure ensures efficient communication and
              project execution
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f7fafc] to-white">
                  <div className="text-center space-y-8 w-full max-w-4xl px-4">
                    {/* Managing Director */}
                    <div className="flex justify-center">
                      <div className="bg-[#1e3a5f] text-white px-8 py-4 rounded-lg shadow-lg">
                        <div className="font-bold text-lg">
                          Managing Director
                        </div>
                        <div className="text-sm text-gray-300">
                          Mr. Tan Chau
                        </div>
                      </div>
                    </div>

                    {/* Department Heads */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-[#d4a574] text-white px-6 py-3 rounded-lg shadow-md">
                        <div className="font-semibold">Design Department</div>
                        <div className="text-sm">Senior Architect</div>
                      </div>
                      <div className="bg-[#d4a574] text-white px-6 py-3 rounded-lg shadow-md">
                        <div className="font-semibold">Project Management</div>
                        <div className="text-sm">Senior PM</div>
                      </div>
                      <div className="bg-[#d4a574] text-white px-6 py-3 rounded-lg shadow-md">
                        <div className="font-semibold">Site Operations</div>
                        <div className="text-sm">Lead Engineer</div>
                      </div>
                    </div>

                    {/* Support Departments */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-[#e2e8f0] text-[#2d3748] px-4 py-2 rounded shadow">
                        <div className="font-medium text-sm">Designers</div>
                      </div>
                      <div className="bg-[#e2e8f0] text-[#2d3748] px-4 py-2 rounded shadow">
                        <div className="font-medium text-sm">Coordinators</div>
                      </div>
                      <div className="bg-[#e2e8f0] text-[#2d3748] px-4 py-2 rounded shadow">
                        <div className="font-medium text-sm">
                          Site Supervisors
                        </div>
                      </div>
                      <div className="bg-[#e2e8f0] text-[#2d3748] px-4 py-2 rounded shadow">
                        <div className="font-medium text-sm">QC Team</div>
                      </div>
                    </div>

                    {/* Additional Support */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-200 text-[#4a5568] px-4 py-2 rounded">
                        <div className="text-sm">Admin & Finance</div>
                      </div>
                      <div className="bg-gray-200 text-[#4a5568] px-4 py-2 rounded">
                        <div className="text-sm">Procurement</div>
                      </div>
                      <div className="bg-gray-200 text-[#4a5568] px-4 py-2 rounded">
                        <div className="text-sm">HR & Safety</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Let our experienced team help you bring your construction vision
              to life.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="gold" className="text-lg px-8 py-6">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


