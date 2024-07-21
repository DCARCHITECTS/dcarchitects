import React from 'react';

function Services() {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="flex flex-col p-4 bg-blue-100 rounded-lg shadow h-[400px] bg-cover bg-center"
                     style={{ backgroundImage: 'url(/residential.jpg)' }}>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Residential Design</h3>
                    <p className="flex-1 text-white">Creating beautiful homes that fit your lifestyle.</p>
                </div>
                <div className="flex flex-col p-4 bg-green-100 rounded-lg shadow h-[400px] bg-cover bg-center"
                     style={{ backgroundImage: 'url(/commercial.png)' }}>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Commercial Design</h3>
                    <p className="flex-1 text-white">Innovative designs for your business needs.</p>
                </div>
                <div className="flex flex-col p-4 bg-yellow-100 rounded-lg shadow h-[400px] bg-cover bg-center"
                     style={{ backgroundImage: 'url(/interior.png)' }}>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Interior Design</h3>
                    <p className="flex-1 text-white">Innovative designs for your business needs.</p>
                </div>
                <div className="flex flex-col p-4 bg-red-100 rounded-lg shadow h-[400px] bg-cover bg-center"
                     style={{ backgroundImage: 'url(/education.jpg)' }}>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Educational Architecture</h3>
                    <p className="flex-1 text-white">Developing sustainable and functional urban areas.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
