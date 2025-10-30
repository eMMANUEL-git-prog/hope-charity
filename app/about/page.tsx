"use client"

import Image from "next/image"
import SectionTitle from "@/components/SectionTitle"
import Card from "@/components/Card"
import AnimatedSection from "@/components/AnimatedSection"

export default function About() {
  const team = [
    {
      name: "Sarah Williams",
      role: "Executive Director",
      image: "/professional-woman-headshot.png",
    },
    {
      name: "James Mitchell",
      role: "Programs Director",
      image: "/professional-man-headshot.png",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach",
      image: "/professional-woman-smiling-headshot.png",
    },
  ]

  const timeline = [
    {
      year: "2015",
      title: "Founded",
      description: "Hope Charity was established with a vision to support vulnerable children.",
    },
    {
      year: "2017",
      title: "First 100 Children",
      description: "Reached our first milestone of supporting 100 children in our programs.",
    },
    {
      year: "2019",
      title: "Healthcare Program Launch",
      description: "Launched comprehensive healthcare initiative for all children.",
    },
    {
      year: "2023",
      title: "1000+ Lives Impacted",
      description: "Celebrated supporting over 1000 children through our various programs.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Hope Charity</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Our story is one of compassion, dedication, and unwavering commitment to transforming the lives of children
            in need.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card>
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Mission</h3>
                <p className="text-[#1F2937] leading-relaxed">
                  To provide comprehensive support to orphaned and vulnerable children through quality education,
                  healthcare, nutrition, and emotional care. We believe every child deserves the opportunity to thrive
                  and reach their full potential.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection>
              <Card>
                <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Our Vision</h3>
                <p className="text-[#1F2937] leading-relaxed">
                  A world where every child, regardless of their circumstances, has access to education, healthcare, and
                  the love and support they need to build a bright future. We envision communities where compassion and
                  action create lasting change.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle title="Our Story" subtitle="How Hope Charity began and grew" />
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <p className="text-lg text-[#1F2937] mb-6 leading-relaxed">
                Hope Charity was founded in 2015 by a group of passionate individuals who witnessed the struggles of
                orphaned children in our community. What started as a small initiative to provide meals and basic
                education has grown into a comprehensive organization serving over 1000 children annually.
              </p>
              <p className="text-lg text-[#1F2937] mb-6 leading-relaxed">
                Today, we operate multiple programs including education scholarships, healthcare services, nutrition
                support, and mentorship initiatives. Our success is built on the foundation of community support,
                dedicated volunteers, and generous donors who believe in our mission.
              </p>
              <p className="text-lg text-[#1F2937] leading-relaxed">
                Every day, our team works tirelessly to ensure that the children in our care receive not just material
                support, but also love, guidance, and opportunities to dream big and achieve their goals.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle title="Our Journey" subtitle="Key milestones in our growth" />
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index}>
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && <div className="w-1 h-24 bg-[#E5E7EB] mt-4"></div>}
                  </div>
                  <div className="pb-12">
                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
                    <p className="text-[#6B7280]">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <AnimatedSection>
            <SectionTitle title="Our Team" subtitle="Meet the dedicated people behind Hope Charity" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index}>
                <Card className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">{member.name}</h3>
                  <p className="text-[#6B7280]">{member.role}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
