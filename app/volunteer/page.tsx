"use client"

import type React from "react"

import { useState } from "react"
import SectionTitle from "@/components/SectionTitle"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { Heart, Users, Lightbulb, Check } from "lucide-react"

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    availability: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", skills: "", availability: "" })
    }, 3000)
  }

  const opportunities = [
    {
      icon: Heart,
      title: "Mentorship",
      description: "Provide guidance and support to children through one-on-one mentoring sessions.",
    },
    {
      icon: Users,
      title: "Community Events",
      description: "Help organize and run community events, fundraisers, and awareness campaigns.",
    },
    {
      icon: Lightbulb,
      title: "Skills Training",
      description: "Share your professional skills through workshops and training sessions.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Volunteer Team</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Make a direct impact in the lives of children by volunteering your time, skills, and compassion.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Volunteer Opportunities" subtitle="Find the perfect way to contribute" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => {
              const Icon = opp.icon
              return (
                <Card key={index}>
                  <Icon className="w-12 h-12 text-[#2563EB] mb-4" />
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{opp.title}</h3>
                  <p className="text-[#6B7280]">{opp.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <Card>
              <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Register as a Volunteer</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-2">Full Name</label>
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
                  <label className="block text-sm font-semibold text-[#1F2937] mb-2">Email Address</label>
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

                {/* Skills */}
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-2">Skills & Expertise</label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    placeholder="Tell us about your skills and how you'd like to help..."
                  />
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-semibold text-[#1F2937] mb-2">Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekends">Weekends</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="flexible">Flexible</option>
                    <option value="occasional">Occasional</option>
                  </select>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  {submitted ? "Thank You!" : "Register as Volunteer"}
                </Button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <Check className="w-6 h-6 text-green-600" />
                    <span className="text-green-800">Thank you for registering! We'll be in touch soon.</span>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Why Volunteer With Us?" subtitle="The rewards of giving back" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Make a Real Difference",
                description: "Your efforts directly impact the lives of children in need, creating lasting change.",
              },
              {
                title: "Build Meaningful Connections",
                description: "Connect with like-minded individuals who share your passion for helping others.",
              },
              {
                title: "Develop New Skills",
                description: "Gain valuable experience and develop skills while contributing to a worthy cause.",
              },
              {
                title: "Personal Growth",
                description: "Volunteering is a rewarding experience that enriches your own life and perspective.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{item.title}</h3>
                <p className="text-[#6B7280]">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
