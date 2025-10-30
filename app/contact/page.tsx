"use client";

import type React from "react";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { Mail, Phone, MapPin, Clock, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <Mail className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A8A] mb-8">
                Contact Information
              </h2>

              <Card className="mb-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">Phone</h3>
                    <p className="text-[#6B7280]">+254 795 198 141</p>
                  </div>
                </div>
              </Card>

              <Card className="mb-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">Email</h3>
                    <p className="text-[#6B7280]">info@hopecharity.org</p>
                  </div>
                </div>
              </Card>

              <Card className="mb-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">
                      Address
                    </h3>
                    <p className="text-[#6B7280]">
                      123 Charity Lane, City, State 12345
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">
                      Office Hours
                    </h3>
                    <p className="text-[#6B7280] text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-[#6B7280] text-sm">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-[#6B7280] text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full">
                    {submitted ? "Message Sent!" : "Send Message"}
                  </Button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                      <Check className="w-6 h-6 text-green-600" />
                      <span className="text-green-800">
                        Thank you! We'll get back to you soon.
                      </span>
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle
            title="Visit Us"
            subtitle="Find our location on the map"
          />
          <div className="w-full h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Hope Charity Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
