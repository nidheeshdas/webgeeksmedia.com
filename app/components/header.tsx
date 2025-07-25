import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Logo from "~/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-gradient-to-r from-green-100 to-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/"><Logo size="md" /></a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
              Connect with us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1 text-gray-700">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="text-gray-700">
                About
              </a>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full w-fit">
                Connect with us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
