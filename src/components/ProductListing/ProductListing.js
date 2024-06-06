import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProducts, getAllProducts } from '../../features/products/productSlice';
import ProductCard from '../ProductCard/ProductCard';
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

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncProducts())
    }, [dispatch])

    const products = useSelector(getAllProducts);
    // console.log(products);
    const renderProducts = products.map((product) => {
        return <ProductCard key={product.id} data={product} />
    })

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


    return (
        // <div className='product-list'>
        //     {renderProducts}
        // </div>
        <>
            <motion.div
                className="container mx-auto px-4 lg:px-18 py-8"
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
                        // onChange={(e) => sortProducts(e.target.value)}
                        >
                            <option value="lowToHigh">Price Low to High</option>
                            <option value="highToLow">Price High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Product cards which will give all the products from site. */}
                {renderProducts}

            </motion.div>
        </>
    );
};

export default ProductListing;