'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[250px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bgaboutus.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white  px-6 py-3 rounded">
          Contact Page
        </h1>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Phone,
            label: 'Phone',
            value: '+234 816 615 9501',
            href: 'tel:+2348166159501',
          },
          {
            icon: Mail,
            label: 'Email',
            value: 'curtisjnrosamudiamen@gmail.com',
            href: 'mailto:curtisjnrosamudiamen@gmail.com',
          },
          {
            icon: MapPin,
            label: 'Address',
            value: 'Street 16 Palace Road, Upper Mission Extension, Lagos, Nigeria',
            href: 'https://maps.google.com?q=Street+16+Palace+Road+Upper+Mission+Extension+Lagos',
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 text-center flex flex-col items-center text-gray-700 hover:bg-green-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <item.icon size={36} className="text-green-600 mb-3" />
            <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
            <p>{item.value}</p>
          </motion.a>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border rounded-md"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto pb-20 px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Find Us Here</h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Street+16+Palace+Road+Upper+Mission+Extension+Lagos+Nigeria"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348166159501"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.11 17.63c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.46 1.07 2.85 1.22 3.05c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.7.64.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.74 5.45 2.03 7.74L0 32l8.5-2.22C10.65 31.3 13.23 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29c-2.53 0-4.88-.66-6.91-1.8l-.5-.29-5.05 1.32 1.35-4.92-.33-.51C3.3 21.15 2.5 18.65 2.5 16 2.5 8.82 8.82 2.5 16 2.5S29.5 8.82 29.5 16 23.18 29.5 16 29.5z" />
        </svg>
      </a>
    </div>
  );
}
