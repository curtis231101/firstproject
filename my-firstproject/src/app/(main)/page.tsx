'use client';

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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <div id="home" className="relative h-[90vh] w-full overflow-hidden bg-black opacity-10000 mb-20">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt={`Slide ${index}`}
            fill
            className={`absolute object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            priority={index === 0}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-opacity duration-1000 leading-tight max-w-2xl">
            {slides[current].text}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            {slides[current].buttons.map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className="px-6 py-3 text-center rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      {/* <section id="products" className="py-16 px-4 md:px-8 bg-white">
        <ProductsPage />
      </section>

       <section id="about" className="py-16 px-4 md:px-8 bg-white">
        <AboutPage />
      </section>

      <section id="services" className="py-16 px-4 md:px-8 bg-gray-100">
       <ServicesPage />
      </section>

      <section id="contact" className="py-16 px-4 md:px-8 bg-white">
        <ContactPage />
      </section> */}
    </>
  );
}
