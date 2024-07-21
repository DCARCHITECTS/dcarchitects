import React from 'react';

function About() {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
            <p className="text-lg text-center mb-8">
            DC ARCHITECTS stands at the forefront of architectural innovation, dedicated to designing spaces that inspire and elevate everyday experiences. Our team of skilled architects, designers, and professionals works in synergy to create cutting-edge solutions that blend practical functionality, environmental sustainability, and striking aesthetics. 
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-1/3 p-4 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p>To create innovative and sustainable designs that meet the needs and aspirations of our clients.</p>
                </div>
                <div className="w-1/3 p-4 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p>To be a global leader in the field of architecture, recognized for our commitment to excellence and creativity.</p>
                </div>
                <div className="w-1/3 p-4 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                    <p>Innovation, integrity, sustainability, and client satisfaction are at the core of everything we do.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
