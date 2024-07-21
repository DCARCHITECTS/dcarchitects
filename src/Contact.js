import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-lg text-center mb-8">
                Feel free to reach out to us using the details below.
            </p>
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Our Contact Information</h3>
                <p className="text-gray-700 mb-2">
    <strong>Phone:</strong> <br/>
    <a href="tel:+919741433325" className='text-lg text-blue-600 hover:underline'>
        +91 97414 33325
    </a>
</p>

                <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> <br/>
                    <a href="mailto:dcarchitects1234@gmail.com" className='text-lg text-blue-600 hover:underline'>
                        dcarchitects1234@gmail.com
                    </a>
                </p>

                <p className="text-gray-700 mb-4 text-justify">
                    <strong>Address:</strong><br/><p className='text-lg'> DC Architects,<br/> Near Jindal Prestige City<br/>
                    Nagasandra Post, Bengaluru-73,<br/>
                    Karnataka, India</p>
                </p>
                <div className="relative overflow-hidden" style={{ paddingTop: '2%' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9077222996112!2d77.48661585152145!3d13.065970637773928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23c158e83f5f%3A0xff19855de2ebd477!2sDC%20ARCHITECTS!5e0!3m2!1sen!2sin!4v1721559475724!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
