import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../features/products/productSlice';
import ProductCard from '../ProductCard/ProductCard';
// import "./ProductListing.scss"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



const cardVariants = {
    hidden: { opacity: 0.4, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.8,
            ease: "easeInOut",
        },
    },
};

const ProductListing = () => {
    // const products = useSelector(getAllProducts);
    // // console.log(products);
    // const renderProducts = products.map((product) => {
    //     return <ProductCard key={product.id} data={product} />
    // })
    // return (
    //     <div className='product-list'>
    //         {renderProducts}
    //     </div>
    // );


    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const productsData = [
        {
            id: 1,
            name: "Guitar",
            price: 5000,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Drums",
            price: 8000,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Keyboard",
            price: 6000,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Microphone",
            price: 2000,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: 'Violin',
            price: 7000,
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            name: 'Saxophone',
            price: 9000,
            image: 'https://via.placeholder.com/150',
        },
    ];
    const [products, setProducts] = useState(productsData);

    Function to sort products by price
    const sortProducts = (order) => {
        const sortedProducts = [...products].sort((a, b) => {
            if (order === 'lowToHigh') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setProducts(sortedProducts);
    };

    return (
        <motion.div
            className="container mx-auto px-4 lg:px-60 py-8"
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
        >
            <h1 className="text-3xl font-bold mb-8">Products</h1>
            <div className="flex justify-between mb-4">
                <div>
                    <label htmlFor="sortBy">Sort by:</label>
                    <select
                        id="sortBy"
                        className="ml-2 px-2 py-1 border rounded"
                        onChange={(e) => sortProducts(e.target.value)}
                    >
                        <option value="lowToHigh">Price Low to High</option>
                        <option value="highToLow">Price High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {productsData.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md flex flex-col justify-between"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-contain"
                        />
                        <div className="flex flex-col justify-center p-4">
                            <h2 className="text-lg font-semibold mb-2 text-center">
                                {product.name}
                            </h2>
                            <p className="text-gray-500 mb-2 text-center">
                                Price: ₹{product.price}
                            </p>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 self-center">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProductListing;