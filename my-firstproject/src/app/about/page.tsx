import Image from 'next/image';
import { Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>

      {/* Top Banner */}
      <section
        className="h-[250px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bgaboutus.jpg')", // Replace with your actual image path
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white  px-6 py-3 rounded">
          Our Services
        </h1>
      </section>

      {/* Middle Split Section */}
      <section className="h-[100vh] flex flex-col md:flex-row  gap-8 px-6 md:px-16 py-16 bg-white">
        {/* Text Left */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-green-800">Who We Are</h2>
          <p className="text-gray-700">
            FarmCo is a family-run agricultural business focused on producing high-quality, organic food using sustainable practices. Organic farmers grow clean crops without using toxic chemicals. They care for soil, protect water, and support biodiversity to ensure a healthy and sustainable planet for everyone.
          </p>
        <section className="flex flex-col justify-between md:flex-row py-4">
            {/* Left Text */}
            <div className="md:w-1/2 p-4 flex flex-col items-start" >
              <div className=" space-between items-center mb-2">
                <Leaf className="text-green-600 mr-2" size={28} />
                <h2 className="text-xl font-semibold text-green-800">Organic Herbs and Produce for You</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We believe in cultivating not just crops, but also communities. Our farm is rooted in tradition, yet embraces innovation to meet the needs of tomorrow.Organic farmers grow clean crops without using toxic chemicals. They care for soil, protect water, and support biodiversity to ensure a healthy and sustainable planet for everyone.
              </p>
            </div>

            {/* Right Text */}
            <div className="md:w-1/2 p-4 flex flex-col items-start">
              <div className="items-center mb-2">
                <Leaf className="text-green-600 mr-2" size={28} />
                <h2 className="text-xl font-semibold text-green-800">Organic Herbs and Produce for You</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Organic growers respect nature, avoid toxins, and grow healthy crops using clean methods that protect land, people.
              </p>
            </div>
          </section>
          
        </div>

        {/* Image Right */}
       <div className="md:w-1/2 h-full flex ">
          <Image
            src="/bgaboutpage.jpg"
            alt="About the farm"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Two-Column Text Section */}
      {/* <section className="flex flex-col md:flex-row px-6 md:px-16 py-16 bg-gray-100"> */}
        {/* Left Text */}
        {/* <div className="md:w-1/2 p-4 flex items-center">
          <p className="text-gray-700 leading-relaxed">
            We believe in cultivating not just crops, but also communities. Our farm is rooted in tradition, yet embraces innovation to meet the needs of tomorrow.
          </p>
        </div> */}

        {/* Right Text */}
        {/* <div className="md:w-1/2 p-4 flex items-center">
          <p className="text-gray-700 leading-relaxed">
            Our mission is to deliver freshness and quality you can taste — from our fields directly to your table. Sustainability, transparency, and love for nature guide all we do.
          </p>
        </div>
      </section> */}
    </div>
  );
}
