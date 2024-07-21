import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">DC ARCHITECTS
                    <p className='text-sm' style={{fontWeight:'normal'}}>Form-Function-Aesthetics</p>
                    </div>
              <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
                        <li><Link to="/services" className="hover:text-yellow-500">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
