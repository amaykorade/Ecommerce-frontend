import React from 'react';
// import "./Header.scss"
import { Link } from 'react-router-dom';

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { RiMenu3Fill } from "react-icons/ri";


const cardVariants = {
    hidden: { opacity: 0.4, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div
                className="w-full shadow-sm bg-black"
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="w-4/5 mx-auto flex justify-between items-center py-4 lg:py-5">
                    <div className="text-2xl font-bold text-white">
                        <h3>
                            Music<b className="text-orange-500">Shopify</b>
                        </h3>
                    </div>
                    <div className="hidden lg:flex space-x-8 text-white">
                        <a href="/" className="text-lg">
                            Home
                        </a>
                        <a href="/products" className="text-lg">
                            Products
                        </a>
                        <a href="/about" className="text-lg">
                            About
                        </a>
                        <a href="/contact" className="text-lg">
                            Contact Us
                        </a>
                    </div>
                    <div className="lg:hidden text-white">
                        <button onClick={toggleMenu}>
                            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg> */}
                            {/* <RiMenu3Fill className="w-8 h-8" /> */}
                        </button>
                    </div>
                </div>
                <div
                    className={`fixed top-0 left-0 w-3/5 h-full bg-black transition-transform transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        } lg:hidden`}
                >
                    <div className="p-8">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white">
                                Music<b className="text-orange-500">Shopify</b>
                            </h3>
                        </div>
                        <ul className="space-y-8 list-none text-white">
                            <li>
                                <a href="/" className="text-lg" onClick={toggleMenu}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/products" className="text-lg" onClick={toggleMenu}>
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-lg" onClick={toggleMenu}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-lg" onClick={toggleMenu}>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Header;