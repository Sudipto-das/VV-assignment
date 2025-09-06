import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import DropdownList from "./ui/dropdownlist";
import Sidebar from "./sidebar";


const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 35,
    seconds: 15,
  });
  const [showCollections, setShowCollections] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else return { hours: 0, minutes: 0, seconds: 0 };
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  const collections = ["Summer Collection", "Winter Collection", "Spring Collection"];
  const categories = ["Women's Fashion", "Men's Fashion", "Electronics"];

  return (
    <div className="w-full font-montserrat">
      {/* Top promotional banner */}
      <div className="bg-[#CA8787] text-white text-center py-2 text-xs sm:text-sm">
        50% off on all items Only Limited Time Deal Offer ending in{" "}
        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
        {formatTime(timeLeft.seconds)}
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left section with Hamburger + Logo */}
            <div className="flex items-center">
              {/* Hamburger (mobile only) */}
              <button
                className="md:hidden mr-3 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>

              {/* Logo */}
              <div className="text-xl font-bold text-gray-800">LOGO</div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setShowCollections(true)}
                onMouseLeave={() => setShowCollections(false)}
              >
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  Collections
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {showCollections && <DropdownList listdata={collections} />}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {showCategories && <DropdownList listdata={categories} />}
              </div>

              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Hot Picks
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Gifts
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Shop All
              </a>
            </nav>

            {/* Desktop Login/Register */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="bg-[#FF8F9D] hover:bg-pink-500 text-white px-6 py-1 transition-colors">
                LOGIN
              </button>
              <button className="border border-[#FF8F9D] text-[#FF8F9D] hover:bg-pink-50 px-6 py-1 transition-colors">
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </div>
  );
};

export default Navbar;
