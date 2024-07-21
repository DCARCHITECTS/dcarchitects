import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; DC ARCHITECTS. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.instagram.com/archin_space/" className="hover:text-yellow-500">Facebook</a>
                    <a href="https://www.instagram.com/archin_space/" className="hover:text-yellow-500">Twitter</a>
                    <a href="https://www.instagram.com/archin_space/" className="hover:text-yellow-500">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
