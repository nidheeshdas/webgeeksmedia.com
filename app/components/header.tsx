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
            <Link to="/">
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/audit-service/"
              className="text-gray-700 font-satoshi text-[17px] font-medium leading-[20px] hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              to="/contact-us/"
              className="flex items-start gap-[10px] px-[21px] py-[12px] rounded-[30px] border-2 border-[#E67474] text-[#E67474] hover:bg-[#E67474]/10 transition-colors"
            >
              Connect with us
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
              <Button
                onClick={() => navigate("/contact-us/")}
                className=" text-white px-6 py-2 rounded-full w-fit rounded-[30px] border-2 border-[#E67474] text-[#E67474] hover:bg-[#E67474]/10 transition-colors"
              >
                Connect with us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
