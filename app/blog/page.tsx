"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import SectionTitle from "@/components/SectionTitle"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { blogPosts } from "@/lib/data"
import { Calendar, ArrowRight } from "lucide-react"

export default function Blog() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const postsPerPage = 6
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">Stories, updates, and insights from Hope Charity</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle title="Latest Stories" subtitle="Updates from our community" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[#6B7280] text-sm mb-3">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 flex-1">{post.title}</h3>
                  <p className="text-[#6B7280] mb-4 flex-1">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1E3A8A] font-semibold"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    currentPage === page ? "bg-[#2563EB] text-white" : "bg-[#F3F4F6] text-[#1F2937] hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-[#F3F4F6]">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-[#6B7280] mb-6">
              Get the latest updates, stories, and impact reports delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
