"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import Card from "@/components/Card"
import SectionTitle from "@/components/SectionTitle"
import AnimatedSection from "@/components/AnimatedSection"
import HeroAnimation from "@/components/HeroAnimation"
import { programs, testimonials } from "@/lib/data"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [donationAmount, setDonationAmount] = useState(50)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <HeroAnimation>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Making a Difference in Children's Lives
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  Join us in our mission to provide education, healthcare, and hope to orphaned and vulnerable children.
                </p>
                <div className="flex gap-4">
                  <Link href="/donate">
                    <Button size="lg">Support Our Mission</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </HeroAnimation>
            <HeroAnimation>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/children-playing-together.jpg"
                  alt="Children at our orphanage"
                  fill
                  className="object-cover"
                />
              </div>
            </HeroAnimation>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle
              title="Our Programs"
              subtitle="Transforming lives through education, healthcare, and community support"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <AnimatedSection key={program.id} className={`delay-${index * 100}`}>
                <Card className="hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{program.title}</h3>
                  <p className="text-[#6B7280] mb-4">{program.description}</p>
                  <Link href="/programs">
                    <Button variant="secondary" size="sm">
                      Read More
                    </Button>
                  </Link>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle title="What People Say" subtitle="Hear from our donors, volunteers, and sponsors" />
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <Card className="text-center">
                <div className="mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-lg text-[#1F2937] mb-6 italic">"{testimonials[currentTestimonial].message}"</p>
                <p className="font-bold text-[#1E3A8A]">{testimonials[currentTestimonial].name}</p>
                <p className="text-[#6B7280]">{testimonials[currentTestimonial].role}</p>

                {/* Carousel Controls */}
                <div className="flex justify-center gap-4 mt-8">
                  <button onClick={prevTestimonial} className="p-2 hover:bg-[#F3F4F6] rounded-full transition-colors">
                    <ChevronLeft size={24} className="text-[#2563EB]" />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 hover:bg-[#F3F4F6] rounded-full transition-colors">
                    <ChevronRight size={24} className="text-[#2563EB]" />
                  </button>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <Heart className="w-16 h-16 text-[#2563EB] mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Your Generosity Changes Lives</h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Every donation, no matter the size, directly impacts the lives of children in our care. Join thousands
                of supporters making a real difference.
              </p>
              <Link href="/donate">
                <Button size="lg">Donate Now</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
