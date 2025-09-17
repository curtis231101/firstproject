"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";


type Product = {
  name: string;
  image: string;
  unit: string;
  basePrice: number;
  quantities: number[];
};



export default function ProductsPage() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [priceKey, setPriceKey] = useState<{ [key: string]: number }>({});

  const products: Product[] = [
    { name: "Palm Oil", image: "/palmoil3.jpg", unit: "litres", basePrice: 1200, quantities: [5, 10, 20, 25] },
    { name: "Cassava", image: "/cassava.webp", unit: "bags", basePrice: 4500, quantities: [1, 2, 3, 5] },
    { name: "Pineapple", image: "/pineapple.jpg", unit: "pieces", basePrice: 500, quantities: [1, 5, 10, 20] },
    { name: "Yam", image: "/yam.jpeg", unit: "tubers", basePrice: 1200, quantities: [1, 3, 5, 10] },
    { name: "Pepper", image: "/bg2.jpg", unit: "bags", basePrice: 15000, quantities: [1, 2, 5, 10] },
  ];

  const handleQtyChange = (name: string, qty: number) => {
    setQuantities((prev) => ({ ...prev, [name]: qty }));
    setPriceKey((prev) => ({ ...prev, [name]: Date.now() }));
  };

// Payment Handler
const handlePayment = (product: Product, qty: number) => {
  const totalPrice = qty * product.basePrice;

  // @ts-expect-error: FlutterwaveCheckout is loaded from external script
  FlutterwaveCheckout({
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY, // replace with your public key
    tx_ref: Date.now().toString(),
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: "customer@example.com",
      phone_number: "08123456789",
      name: "John Doe",
    },
    customizations: {
      title: "SADIAB AGRO Store",
      description: `Payment for ${qty} ${product.unit} of ${product.name}`,
      logo: "/logo.png",
    },
    callback: function (data: any) {
      console.log("Payment callback:", data);
      if (data.status === "successful") {
        alert("Payment Successful!");
      } else {
        alert("Payment Failed or Cancelled");
      }
    },
  });
};


  return (
    <div>
      {/* Load Flutterwave Script */}
      <Script src="https://checkout.flutterwave.com/v3.js" strategy="lazyOnload" />

      {/* Hero Section */}
      <section
        id="products"
        className="h-[250px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bgaboutus.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white px-6 py-3 rounded">
          Products
        </h1>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => {
          const qty = quantities[product.name] || product.quantities[0];
          const totalPrice = qty * product.basePrice;

          return (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center p-4"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 font-bold text-lg">{product.name}</h3>

              {/* Price with Animation */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={priceKey[product.name] || "init"}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  className="text-green-700 font-semibold text-lg"
                >
                  ₦{totalPrice.toLocaleString()} ({qty} {product.unit})
                </motion.p>
              </AnimatePresence>

              {/* Quantity Selector */}
              <select
                value={qty}
                onChange={(e) =>
                  handleQtyChange(product.name, Number(e.target.value))
                }
                className="mt-2 border p-2 rounded-md"
              >
                {product.quantities.map((q) => (
                  <option key={q} value={q}>
                    {q} {product.unit}
                  </option>
                ))}
              </select>

              {/* Buy Now Button */}
              <button
                onClick={() => handlePayment(product, qty)}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Buy Now
              </button>
            </div>
          );
        })}
      </section>

      {/* Bulk Contact */}
      <div className="text-center py-8 bg-green-50">
        <p className="text-lg">
          If product is needed in bulk{" "}
          <Link
            href="https://wa.me/2348166159501?text=Hello%20I%20want%20to%20order%20in%20bulk"
            target="_blank"
            className="text-green-600 font-semibold underline"
          >
            contact us on WhatsApp
          </Link>
        </p>
      </div>
    </div>
  );
}
