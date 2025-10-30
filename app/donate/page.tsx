"use client"

import type React from "react"

import { useState } from "react"
import SectionTitle from "@/components/SectionTitle"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { Heart, Check } from "lucide-react"

export default function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "50",
    type: "one-time",
  })
  const [submitted, setSubmitted] = useState(false)

  const presetAmounts = [10, 25, 50, 100, 250, 500]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePresetAmount = (amount: number) => {
    setFormData((prev) => ({ ...prev, amount: amount.toString() }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", amount: "50", type: "one-time" })
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Your generosity directly impacts the lives of children in our care. Every donation, no matter the size,
            makes a real difference.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
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

                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">Donation Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    >
                      <option value="one-time">One-time Donation</option>
                      <option value="monthly">Monthly Donation</option>
                    </select>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1F2937] mb-4">Donation Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handlePresetAmount(amount)}
                          className={`py-2 px-3 rounded-lg font-semibold transition-colors ${
                            formData.amount === amount.toString()
                              ? "bg-[#2563EB] text-white"
                              : "bg-[#F3F4F6] text-[#1F2937] hover:bg-gray-300"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-[#1F2937]">$</span>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        min="1"
                        className="flex-1 px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        placeholder="Enter custom amount"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full">
                    {submitted ? "Thank You!" : "Donate Now"}
                  </Button>

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                      <Check className="w-6 h-6 text-green-600" />
                      <span className="text-green-800">Thank you for your generous donation!</span>
                    </div>
                  )}
                </form>
              </Card>
            </div>

            {/* Impact Info */}
            <div>
              <Card className="mb-6">
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6">Your Impact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">$10</p>
                    <p className="font-semibold text-[#1F2937]">Provides a meal for a child</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">$25</p>
                    <p className="font-semibold text-[#1F2937]">School supplies for a month</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">$50</p>
                    <p className="font-semibold text-[#1F2937]">Medical checkup and care</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">$100</p>
                    <p className="font-semibold text-[#1F2937]">Monthly sponsorship support</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">$500</p>
                    <p className="font-semibold text-[#1F2937]">Full scholarship for a year</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Why Donate?</h3>
                <ul className="space-y-3 text-sm text-[#1F2937]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] font-bold">✓</span>
                    <span>100% of funds go directly to programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] font-bold">✓</span>
                    <span>Tax-deductible donations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] font-bold">✓</span>
                    <span>Transparent reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2563EB] font-bold">✓</span>
                    <span>Regular impact updates</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Counter */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="This Month's Goal" subtitle="Help us reach our target to expand our programs" />
          <Card className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-[#1F2937]">Raised</span>
                <span className="text-2xl font-bold text-[#2563EB]">$45,230</span>
              </div>
              <div className="w-full bg-[#E5E7EB] rounded-full h-4 overflow-hidden">
                <div className="bg-[#2563EB] h-full rounded-full" style={{ width: "75%" }}></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-[#6B7280]">Goal: $60,000</span>
                <span className="text-sm font-semibold text-[#2563EB]">75% Complete</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
