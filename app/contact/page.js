"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2d3748] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with us to discuss your construction project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-[#4a5568] mb-8">
                  We're here to answer your questions and discuss your
                  construction needs. Reach out to us through any of the
                  following channels.
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-[#d4a574]">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">
                            Our Office
                          </CardTitle>
                          <p className="text-[#4a5568]">
                            <strong>
                              PROSPER DYNAMICS CONSTRUCTION SDN. BHD.
                            </strong>
                            <br />
                            32, Jalan Anggerik Vanilla W31/W,
                            <br />
                            Kota Kemuning, Seksyen 31,
                            <br />
                            Shah Alam, Selangor, 40460
                            <br />
                            Malaysia
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-[#d4a574]">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                          <Phone size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">Phone</CardTitle>
                          <p className="text-[#4a5568]">
                            <strong>Ivan:</strong> 012-783 2131
                            <br />
                            <strong>Office:</strong> 03-5122 8792 / 8793
                            <br />
                            <strong>Fax:</strong> 03-5122 8754
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-[#d4a574]">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                          <Mail size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">Email</CardTitle>
                          <p className="text-[#4a5568]">
                            <a
                              href="mailto:sbtc600@yahoo.com"
                              className="hover:text-[#1e3a5f] transition-colors"
                            >
                              sbtc600@yahoo.com
                            </a>
                            <br />
                            <a
                              href="mailto:pdcsb600@gmail.com"
                              className="hover:text-[#1e3a5f] transition-colors"
                            >
                              pdcsb600@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-l-4 border-l-[#d4a574]">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center text-white flex-shrink-0">
                          <Clock size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">
                            Business Hours
                          </CardTitle>
                          <p className="text-[#4a5568]">
                            <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                            <br />
                            <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                            <br />
                            <strong>Sunday:</strong> Closed
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-[#4a5568]">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="012-345 6789"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-[#2d3748] mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className="w-full min-h-[150px]"
                        />
                      </div>

                      {submitStatus === "success" && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-green-800 text-sm">
                            Thank you for your message! We'll get back to you
                            soon.
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="gold"
                        size="lg"
                        className="w-full"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2" size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#2d3748] mb-4">
              Find Us Here
            </h2>
            <p className="text-center text-lg text-[#4a5568] mb-12">
              Visit our office in Kota Kemuning, Shah Alam
            </p>

            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0859851384795!2d101.53872607587908!3d3.0508758970162874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc35a1a0c53e9d%3A0x7a6c0f0a0f0a0f0a!2sJalan%20Anggerik%20Vanilla%20W31%2FW%2C%20Kota%20Kemuning%2C%2040460%20Shah%20Alam%2C%20Selangor!5e0!3m2!1sen!2smy!4v1696000000000!5m2!1sen!2smy"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prosper Dynamic Construction Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Our team of experts is ready to help you turn your construction
              dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0127832131">
                <Button size="lg" variant="gold" className="text-lg px-8 py-6">
                  Call Us Now
                </Button>
              </a>
              <a href="mailto:pdcsb600@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#1e3a5f]"
                >
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


