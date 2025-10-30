"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#2563EB]">
            <img src="/logo.webp" alt="hope" className="h-48" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1F2937] hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/donate"
            className="hidden md:block bg-[#2563EB] text-white px-6 py-2 rounded-lg hover:bg-[#1E3A8A] transition-colors"
          >
            Donate
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#1F2937] hover:text-[#2563EB] py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block bg-[#2563EB] text-white px-6 py-2 rounded-lg text-center hover:bg-[#1E3A8A] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
