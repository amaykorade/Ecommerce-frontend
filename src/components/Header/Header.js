import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../../features/user/userSlice';

const cardVariants = {
    hidden: { opacity: 0.4, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);

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
            controls.start('visible');
        }
    }, [controls, inView]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/user/login');
    };

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
                        <Link to="/" className="text-lg">
                            Home
                        </Link>
                        <Link to="/product" className="text-lg">
                            Products
                        </Link>
                        <Link to="/about" className="text-lg">
                            About
                        </Link>
                        <Link to="/contact" className="text-lg">
                            Contact Us
                        </Link>
                        {user ? (
                            <>
                                <span>{user.name}</span>
                                <button onClick={handleLogout} className="text-lg">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/user/login" className="text-lg">Login</Link>
                                <Link to="/user/signup" className="text-lg">Signup</Link>
                            </>
                        )}
                    </div>
                    <div className="lg:hidden text-white">
                        <button onClick={toggleMenu}>
                            {/* <RiMenu3Fill className="w-8 h-8" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`fixed top-0 left-0 w-3/5 h-full bg-black transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
                >
                    <div className="p-8">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white">
                                Music<b className="text-orange-500">Shopify</b>
                            </h3>
                        </div>
                        <ul className="space-y-8 list-none text-white">
                            <li>
                                <Link to="/" className="text-lg" onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/product" className="text-lg" onClick={toggleMenu}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-lg" onClick={toggleMenu}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-lg" onClick={toggleMenu}>
                                    Contact Us
                                </Link>
                            </li>
                            {user ? (
                                <>
                                    <li>
                                        <span>{user.name}</span>
                                    </li>
                                    <li>
                                        <button onClick={() => { handleLogout(); toggleMenu(); }} className="text-lg">
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/user/login" className="text-lg" onClick={toggleMenu}>
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/user/signup" className="text-lg" onClick={toggleMenu}>
                                            Signup
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Header;
