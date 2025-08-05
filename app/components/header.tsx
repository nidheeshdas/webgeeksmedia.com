import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "~/components/logo";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <header className="relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" aria-label="WebGeeks Media">
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/audit-service/"
              className="relative group text-gray-700 font-satoshi text-[17px] font-medium leading-[20px] hover:text-gray-900"
            >
              Services
              <span className="absolute bg-[#E67474] -bottom-1 left-0 w-full h-0.5 bg-custom-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              to="/contact-us/"
              // className="flex items-start gap-[10px] px-[21px] py-[12px] rounded-[30px] border-2 border-[#E67474] text-gray-700 hover:bg-[#E67474]/10 transition-colors"
            >
              <div className="p-[2px] rounded-[30px] bg-gradient-to-r from-[#E67474] to-[#AA3FFE] shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                <button className="flex flex-row gap-[10px] text-[#333] text-center font-medium text-[16px] leading-[16px] cursor-pointer bg-white rounded-[28px] px-[28px] py-[20px] transition-colors hover:bg-gray-100">
                  Connect with us
                </button>
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1 text-gray-700">
                <Link to="/audit-service/">
                  <span>Services</span>
                </Link>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </div>
              <Link
                to="/contact-us/"
                // className="flex items-start gap-[10px] px-[21px] py-[12px] rounded-[30px] border-2 border-[#E67474] text-gray-700 hover:bg-[#E67474]/10 transition-colors"
              >
                <div className="p-[2px] w-[160px] rounded-[30px] bg-gradient-to-r from-[#E67474] to-[#AA3FFE] shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                  <button className="flex flex-row gap-[10px] text-[#333] text-center font-medium text-[16px] leading-[16px] cursor-pointer bg-white rounded-[28px] px-[28px] py-[20px] transition-colors hover:bg-gray-100">
                    Connect with us
                  </button>
                </div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
