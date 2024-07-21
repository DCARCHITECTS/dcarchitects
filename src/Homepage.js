import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/homebg.jpg')" }}>
              <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Bringing Your Vision to Life</h1>
                        <Link to="/contact" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Get in Touch</Link>
                    </div>
                </div>
            </section>  
            <section id="about" className="py-12 bg-gray-100">
  <div className="container mx-auto flex flex-col md:flex-row items-start">
    {/* Combined Container */}
    <div className="flex flex-col md:flex-row items-start w-full bg-white shadow-md rounded-lg p-6">
      {/* Text Section on the Left */}
      <div className="flex-1 mb-8 md:mb-0 md:mr-6">
        <h2 className="text-3xl font-bold mb-4">By Owner</h2>
        <p className="mb-4 text-justify">
          DC ARCHITECTS is a dynamic and innovative architecture firm dedicated to creating exceptional spaces that inspire and elevate the human experience. Our team of passionate and experienced architects, designers, and professionals collaborate to deliver cutting-edge solutions that blend functionality, sustainability, and aesthetic appeal. We specialize in [specific areas of expertise, e.g. residential, commercial, educational, interior design], and our portfolio showcases our commitment to excellence and client satisfaction. With a focus on creativity, sustainability, and community, we strive to make a positive impact on the built environment and the lives of those we serve.
        </p>
      </div>

      {/* Founder Card on the Right */}
      <div className="flex flex-col items-center md:flex-row md:items-start bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 lg:w-1/3">
        <img
          src="/pfp.png" // replace with the actual path to the founder's profile picture
          alt="Founder Name"
          className="w-32 h-32 rounded-full mb-4 md:mr-6"
        />
        <div className="text-left">
          <h3 className="text-2xl font-bold mb-2">Ar. Hemanth D C</h3>
          <p className="mb-2">Founder and Managing Director, CEO</p>
          <p className="mb-2"></p>
          <Link to="/about" className="text-yellow-500 hover:text-yellow-600">Read More</Link>
        </div>
      </div>
    </div>
  </div>
</section>

            <section id="services" className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="w-1/3 p-4 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Residential Design</h3>
                            <p>Creating beautiful homes that fit your lifestyle.</p>
                        </div>
                        <div className="w-1/3 p-4 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Commercial Design</h3>
                            <p>Innovative designs for your business needs.</p>
                        </div>
                        <div className="w-1/3 p-4 bg-white rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Urban Planning</h3>
                            <p>Developing sustainable and functional urban areas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-4">We would love to hear from you! Please fill out the form below to get in touch with us.</p>
                    <Link to="/contact" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Contact Form</Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
