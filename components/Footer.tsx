import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hope Charity</h3>
            <p className="text-gray-300 text-sm">
              Dedicated to transforming the lives of orphaned and vulnerable
              children through education, healthcare, and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="hover:text-white transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+254 795 198 141</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@hopecharity.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>1008 Kimumu, Eldoret, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Hope Charity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
