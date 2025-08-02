"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';


const slides = [
  {
    image: '/bg1.jpg',
    text: 'Fresh From Our Fields 🌿',
    buttons: [
      { label: 'Learn More', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    image: '/bg2.jpg',
    text: 'Organic Produce, Trusted Quality 🥬',
    buttons: [
      { label: 'Our Services', href: '/services' },
      { label: 'Reach Out', href: '/contact' },
    ],
  },
  {
    image: '/bg3.jpg',
    text: 'Feeding the Future with Nature 🌾',
    buttons: [
      { label: 'Explore FarmCo', href: '/about' },
      { label: 'Let’s Talk', href: '/contact' },
    ],
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5-second interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide.image}
          alt={`Slide ${index}`}
          fill
          className={`absolute object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-200 z-10' : 'opacity-0 z-0'
          }`}
          priority={index === 0}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-6 z-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 transition-opacity duration-1000">
          {slides[current].text}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          {slides[current].buttons.map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    
  );
}