'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    pathname === path ? 'text-green-600 font-bold' : 'text-gray-800';

  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-800">🌿 FarmCo</h1>
      <div className="space-x-6">
        <Link href="/" className={linkStyle('/')}>Home</Link>
         <Link href="/product" className={linkStyle('/')}>Product</Link>
        <Link href="/about" className={linkStyle('/')}>About Us</Link>
        <Link href="/services" className={linkStyle('/')}>Services</Link>
        <Link href="/contact" className={linkStyle('/')}>Contact</Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
