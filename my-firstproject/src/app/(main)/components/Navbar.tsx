"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRightIcon } from 'lucide-react';

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let found = "home";
      for (const section of NAV_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = section.id;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  const linkStyle = (id: string) =>
    activeSection === id
      ? "text-green-600 font-bold"
      : "text-gray-800";

  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-800">🌿 SADIAB</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`${linkStyle(section.id)} transition-colors duration-200 hover:text-green-600`}
              onClick={handleClose}
            >
              {section.label}
            </a>
          ))}
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348037587486?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-600 transition border border-green-600"
          >
            Let’s Talk <ArrowUpRightIcon className="inline-block ml-1" size={16}  />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu with animation */}
        {isVisible && (
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 space-y-4 px-4 py-4 transition-opacity duration-300 ${
              menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onMouseLeave={handleClose}
          >
            <ol>
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={linkStyle(section.id)}
                    onClick={handleClose}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;