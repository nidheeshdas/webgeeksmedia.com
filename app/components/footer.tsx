import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Logo from "~/components/logo"

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Logo size="sm" />
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm mb-4 md:mb-0">© 2025 WebGeeksMedia. All rights reserved.</div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
