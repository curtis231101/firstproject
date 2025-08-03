// "use client";
// import { useEffect, useState } from 'react';
// import Image from "next/image";
// import Link from 'next/link';


// const slides = [
//   {
//     image: '/bg1.jpg',
//     text: 'Fresh From Our Fields 🌿',
//     buttons: [
//       { label: 'Learn More', href: '/about' },
//       { label: 'Contact Us', href: '/contact' },
//     ],
//   },
//   {
//     image: '/bg2.jpg',
//     text: 'Organic Produce, Trusted Quality 🥬',
//     buttons: [
//       { label: 'Our Services', href: '/services' },
//       { label: 'Reach Out', href: '/contact' },
//     ],
//   },
//   {
//     image: '/bg3.jpg',
//     text: 'Feeding the Future with Nature 🌾',
//     buttons: [
//       { label: 'Explore FarmCo', href: '/about' },
//       { label: 'Let’s Talk', href: '/contact' },
//     ],
//   },
// ];

// export default function HomePage() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000); // 5-second interval
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//     <div className="relative h-[90vh] w-full overflow-hidden">
//       {slides.map((slide, index) => (
//         <Image
//           key={index}
//           src={slide.image}
//           alt={`Slide ${index}`}
//           fill
//           className={`absolute object-cover transition-opacity duration-1000 ${
//             index === current ? 'opacity-200 z-10' : 'opacity-0 z-0'
//           }`}
//           priority={index === 0}
//         />
//       ))}

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-6 z-20">
//         <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 transition-opacity duration-1000">
//           {slides[current].text}
//         </h1>
//         <div className="flex flex-col sm:flex-row gap-4">
//           {slides[current].buttons.map((btn, i) => (
//             <Link
//               key={i}
//               href={btn.href}
//               className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
//             >
//               {btn.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//     {/* Add sections below */}
//       <section id="about" className="py-20 px-4 bg-white">
//         <h2 className="text-3xl font-bold mb-4">About Us</h2>
//         <p>We are committed to providing the highest quality organic produce.</p>
//       </section>
//       <section id="services" className="py-20 px-4 bg-gray-100">
//         <h2 className="text-3xl font-bold mb-4">Our Services</h2>
//         <p>Discover our range of farm services and organic products.</p>
//       </section>
//       <section id="contact" className="py-20 px-4 bg-white">
//         <h2 className="text-3xl font-bold mb-4">Contact</h2>
//         <p>Get in touch with us for more information.</p>
//       </section>

  
//     </>
    
//   );
// }
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
      <div className="relative h-[90vh] w-full overflow-hidden">
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
      <section id="about" className="py-16 px-4 md:px-8 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl">We are committed to providing the highest quality organic produce.</p>
      </section>

      <section id="services" className="py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-700 max-w-2xl">Discover our range of farm services and organic products.</p>
      </section>

      <section id="contact" className="py-16 px-4 md:px-8 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 max-w-2xl">Get in touch with us for more information.</p>
      </section>
    </>
  );
}
