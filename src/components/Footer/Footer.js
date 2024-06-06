import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-black text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Company Name and Description */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">MusicalMart</h3>
                        <p className="text-gray-400">
                            MusicalMart is your one-stop shop for all things music. We offer a
                            wide range of products and services to meet your musical needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/products" className="text-gray-400 hover:text-white">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <p className="text-gray-400">123 Music Lane</p>
                        <p className="text-gray-400">Music City, MC 12345</p>
                        <p className="text-gray-400">Email: abcdefghr.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>

                    {/* Subscribe to Email */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Subscribe to Email</h3>
                        <p className="text-gray-400 mb-4">
                            Get the latest updates and offers.
                        </p>
                        <form>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full p-2 mb-2 rounded border border-gray-300"
                            />
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );

};

export default Footer;