"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-r from-blue-50 to-indigo-50 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with triple element concept */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <div className="relative flex">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MadeByThree
                </span>
              </div>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-10 bg-blue-200 transition-opacity duration-300"></span>
              </Link>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={28} className="text-purple-600" />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
