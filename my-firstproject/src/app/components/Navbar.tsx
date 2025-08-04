"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, use } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true);
    } else {
      // Wait for animation before unmounting
      const timeout = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  const linkStyle = (path: string) =>
    pathname === path ? 'text-green-600 font-bold' : 'text-gray-800';

  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md p-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-800">🌿 SADIAB</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
  <Link href="/" className={linkStyle('/')}>Home</Link>
  <Link href="/about" className={linkStyle('/about')}>About Us</Link>
  <Link href="/products" className={linkStyle('/products')}>Products</Link>         
  <Link href="/services" className={linkStyle('/services')}>Services</Link>
  <Link href="/contact" className={linkStyle('/contact')}>Contact</Link>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/2348166159501?text=Hi%20there!%20I%20would%20love%20to%20know%20more%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-600 transition border border-green-600"
  >
    Let’s Talk
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
              <li><Link href="/" className={linkStyle('/')} onClick={handleClose}>Home</Link></li>
              <li><Link href="/products" className={linkStyle('/products')} onClick={handleClose}>Products</Link></li>
              <li><Link href="/about" className={linkStyle('/about')} onClick={handleClose}>About Us</Link></li>
              <li><Link href="/services" className={linkStyle('/services')} onClick={handleClose}>Services</Link></li>
              <li><Link href="/contact" className={linkStyle('/contact')} onClick={handleClose}>Contact</Link></li>
            </ol>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;