'use client';

import { Leaf, Tractor, Truck, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Organic Farming',
    icon: Leaf,
    description: 'Fresh, natural crops grown without chemicals.',
    color: 'bg-green-50',
  },
  {
    title: 'Farm Mechanization',
    icon: Tractor,
    description: 'Modern machines for fast, efficient farming.',
    color: 'bg-yellow-50',
  },
  {
    title: 'Product Delivery',
    icon: Truck,
    description: 'Doorstep delivery of fresh farm produce.',
    color: 'bg-blue-50',
  },
  {
    title: 'Agro Store',
    icon: Store,
    description: 'Get top farming tools and supplies easily.',
    color: 'bg-purple-50',
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
       id='services' className="h-[250px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bgaboutus.jpg')", // Replace with your image
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">
          Services
        </h1>
      </section>

      {/* Intro Text */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">What We Offer</h2>
        <p className="text-gray-700">
          We provide reliable agricultural services designed to support your farming journey.
        </p>
      </section>

      {/* Services Cards Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`w-full sm:w-[48%] lg:w-[30%] border rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300 ${service.color}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <service.icon size={40} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </section>

      {/* WhatsApp CTA */}
      <div className="text-center mb-16">
        <Link
          href="https://wa.link/vkq88s"
          target="_blank"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition duration-300"
        >
          Let’s Talk on WhatsApp
        </Link>
      </div>
    </div>
  );
}
