"use client"

import { useState } from "react"
import Image from "next/image"
import SectionTitle from "@/components/SectionTitle"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    { id: 1, src: "/children-studying-in-classroom.jpg", alt: "Children studying in classroom" },
    { id: 2, src: "/volunteers-helping-children.jpg", alt: "Volunteers helping children" },
    { id: 3, src: "/happy-children-smiling.jpg", alt: "Happy children smiling" },
    { id: 4, src: "/classroom-learning.png", alt: "Classroom learning" },
    { id: 5, src: "/medical-care-and-health-services.jpg", alt: "Medical care and health services" },
    { id: 6, src: "/children-eating-nutritious-meals.jpg", alt: "Children eating nutritious meals" },
    { id: 7, src: "/mentor-helping-child-with-studies.jpg", alt: "Mentor helping child with studies" },
    { id: 8, src: "/children-playing-together.jpg", alt: "Children playing together" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Explore moments of joy, learning, and transformation from our programs
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Photo Gallery" subtitle="Moments that matter" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
