"use client"

import Image from "next/image"
import SectionTitle from "@/components/SectionTitle"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { events } from "@/lib/data"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function Events() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Join us for meaningful events that bring our community together
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Our Events" subtitle="Be part of something special" />
          <div className="space-y-8">
            {events.map((event, index) => (
              <Card key={event.id} className={`overflow-hidden ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="text-3xl font-bold text-[#1E3A8A] mb-4">{event.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-[#1F2937]">
                        <Calendar className="w-5 h-5 text-[#2563EB]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#1F2937]">
                        <MapPin className="w-5 h-5 text-[#2563EB]" />
                        <span>Hope Charity Center</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#1F2937]">
                        <Clock className="w-5 h-5 text-[#2563EB]" />
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                    <p className="text-[#6B7280] mb-6 leading-relaxed">{event.description}</p>
                    <Button>Join Event</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <SectionTitle title="Past Events" subtitle="Celebrating our community's impact" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Spring Fundraiser 2024",
                date: "April 15, 2024",
                raised: "$25,000",
              },
              {
                title: "Children's Day Celebration",
                date: "March 20, 2024",
                raised: "500+ attendees",
              },
              {
                title: "Annual Gala 2023",
                date: "December 10, 2023",
                raised: "$50,000",
              },
            ].map((pastEvent, index) => (
              <Card key={index}>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{pastEvent.title}</h3>
                <p className="text-[#6B7280] mb-3">{pastEvent.date}</p>
                <p className="text-lg font-semibold text-[#2563EB]">{pastEvent.raised}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
