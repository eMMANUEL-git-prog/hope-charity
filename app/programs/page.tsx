"use client"

import Image from "next/image"
import Link from "next/link"
import SectionTitle from "@/components/SectionTitle"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { programs } from "@/lib/data"
import { CheckCircle } from "lucide-react"

export default function Programs() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Comprehensive initiatives designed to transform the lives of children in our care
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {programs.map((program, index) => (
            <div key={program.id} className={`mb-16 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">{program.title}</h2>
                  <p className="text-lg text-[#1F2937] mb-6 leading-relaxed">{program.fullDescription}</p>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                      <span className="text-[#1F2937]">Direct impact on child development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                      <span className="text-[#1F2937]">Community-driven approach</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                      <span className="text-[#1F2937]">Sustainable long-term support</span>
                    </div>
                  </div>

                  <Link href="/donate">
                    <Button size="lg">Support This Program</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Our Impact" subtitle="The difference we're making together" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Children Supported" },
              { number: "50+", label: "Staff Members" },
              { number: "500+", label: "Active Volunteers" },
              { number: "100%", label: "Funds to Programs" },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <p className="text-5xl font-bold text-[#2563EB] mb-2">{stat.number}</p>
                <p className="text-[#1F2937] font-semibold">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
            Choose a program that resonates with you and become part of our mission to transform children's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button size="lg">Donate Now</Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="secondary" size="lg">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
