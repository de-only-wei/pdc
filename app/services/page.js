import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Home,
  ClipboardCheck,
  PenTool,
  Wrench,
  Building2,
  PaintBucket,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services - Prosper Dynamic Construction",
  description:
    "Comprehensive construction services including bungalow construction, project management, design and build, and renovation works.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Bungalow Construction",
      description:
        "Specialized construction of luxury bungalows and landed properties with meticulous attention to detail and craftsmanship.",
      features: [
        "Custom design and architectural planning",
        "High-quality materials and finishes",
        "Modern and traditional construction styles",
        "Compliance with all building regulations",
        "Comprehensive warranty and after-sales service",
      ],
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description:
        "Comprehensive project management services ensuring your construction project is delivered on time, within budget, and to the highest standards.",
      features: [
        "Detailed project planning and scheduling",
        "Budget management and cost control",
        "Quality assurance and site supervision",
        "Coordination with architects and consultants",
        "Regular progress reporting and updates",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    },
    {
      icon: PenTool,
      title: "Design and Build",
      description:
        "Seamless integration of design and construction services, providing a single point of contact for your entire project from concept to completion.",
      features: [
        "Integrated design and construction approach",
        "Faster project delivery timelines",
        "Better cost control and value engineering",
        "Enhanced communication and coordination",
        "Reduced project risks and conflicts",
      ],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031",
    },
    {
      icon: Wrench,
      title: "Renovation and Extension",
      description:
        "Expert renovation services to transform and modernize existing properties, including extensions, remodeling, and structural modifications.",
      features: [
        "Residential and commercial renovations",
        "Structural extensions and additions",
        "Space optimization and reconfiguration",
        "Heritage and conservation work",
        "Minimal disruption to daily operations",
      ],
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070",
    },
    {
      icon: PaintBucket,
      title: "Interior Works",
      description:
        "Complete interior finishing services including flooring, wall treatments, ceiling works, and custom carpentry to bring your vision to life.",
      features: [
        "Custom cabinetry and built-in furniture",
        "Premium flooring installation",
        "Decorative wall and ceiling treatments",
        "Lighting design and installation",
        "High-end material selection and sourcing",
      ],
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074",
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description:
        "Professional construction services for commercial properties including offices, retail spaces, and mixed-use developments.",
      features: [
        "Office building construction",
        "Retail and commercial spaces",
        "Warehouse and industrial facilities",
        "Fast-track construction methods",
        "Compliance with commercial building codes",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      icon: Lightbulb,
      title: "Consultation Services",
      description:
        "Expert consultation for construction projects, including feasibility studies, cost estimation, and technical advisory services.",
      features: [
        "Project feasibility analysis",
        "Budget and cost estimation",
        "Technical specifications review",
        "Contractor selection assistance",
        "Value engineering recommendations",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and inspection services to ensure all construction work meets the highest standards and specifications.",
      features: [
        "Regular site inspections and audits",
        "Material testing and verification",
        "Compliance with specifications",
        "Defect identification and rectification",
        "Final handover quality checks",
      ],
      image:
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2d3748] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive construction solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-[#4a5568] max-w-3xl mx-auto">
                From initial design to final handover, we provide end-to-end
                construction services with unwavering commitment to quality and
                client satisfaction.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={service.title}
                    className={`grid md:grid-cols-2 gap-8 items-center ${
                      !isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`${!isEven ? "md:order-2" : ""}`}>
                      <Card className="border-l-4 border-l-[#d4a574] hover:shadow-xl transition-shadow h-full">
                        <CardHeader>
                          <div className="h-16 w-16 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white mb-4">
                            <Icon size={32} />
                          </div>
                          <CardTitle className="text-3xl mb-2">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-base text-[#4a5568]">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold text-[#2d3748] mb-3">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-[#4a5568]"
                              >
                                <CheckCircle2
                                  className="text-[#d4a574] mr-2 flex-shrink-0 mt-0.5"
                                  size={18}
                                />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className={`${!isEven ? "md:order-1" : ""}`}>
                      <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url('${service.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12 max-w-3xl mx-auto">
              We bring expertise, reliability, and dedication to every project
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-[#d4a574] mb-2">
                    25+
                  </div>
                  <CardTitle className="text-lg">Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Over two decades of construction excellence
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-[#d4a574] mb-2">
                    200+
                  </div>
                  <CardTitle className="text-lg">Projects Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Successfully delivered across Malaysia
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-[#d4a574] mb-2">
                    100%
                  </div>
                  <CardTitle className="text-lg">Client Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Committed to exceeding expectations
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-[#d4a574] mb-2">
                    50+
                  </div>
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#4a5568]">
                    Skilled professionals at your service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              Our Process
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12 max-w-3xl mx-auto">
              A systematic approach to delivering excellence
            </p>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Initial meeting to understand your vision",
                },
                {
                  step: "02",
                  title: "Planning",
                  desc: "Detailed project planning and design",
                },
                {
                  step: "03",
                  title: "Approval",
                  desc: "Budget approval and contract signing",
                },
                {
                  step: "04",
                  title: "Construction",
                  desc: "Expert execution and quality control",
                },
                {
                  step: "05",
                  title: "Handover",
                  desc: "Final inspection and project delivery",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="h-20 w-20 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-[#2d3748] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4a5568]">{item.desc}</p>
                </div>
              ))}
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
              Contact us today for a free consultation and let us bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="gold" className="text-lg px-8 py-6">
                  Request a Quote
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
