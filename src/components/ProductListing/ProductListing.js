import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProducts, fetchFilterProducts, getAllProducts } from '../../features/products/productSlice';
import ProductCard from '../ProductCard/ProductCard';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProductListStyled } from './ProductListing.styled';


const ProductListing = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncProducts())
    }, [dispatch])

    const products = useSelector(getAllProducts);
    // const status = useSelector(state => sta)
    // // console.log(products);


    const [filters, setFilters] = useState({
        category: '',
        company: '',
        minPrice: '',
        maxPrice: ''
    })

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        })
    }

    const handleApplyFilters = () => {
        const activeFilters = Object.fromEntries(
            Object.entries(filters).filter(([_, value]) => value !== '' && value !== null)
        );
        dispatch(fetchFilterProducts(activeFilters));
    }

    if (!products || products.length === 0) {
        return <div className='no-products'>No products found.</div>;
    }

    const renderProducts = products.map((product) => {
        return <ProductCard key={product.id} data={product} />
    })

    return (


        <>
            <ProductListStyled>

                <div className='products-main'>
                    <div className='filter-section'>
                        <div className='filter-group'>
                            <label>Company</label>
                            <select name='category' value={filters.category} onChange={handleFilterChange} >
                                <option value="" >All Brands</option>
                                <option value="drum">Drum</option>
                                <option value="guitar" >Guitar</option>
                                <option value="category 3" >Piano</option>
                            </select>
                        </div>
                        <div className='filter-group'>
                            <label>Category</label>
                            <select name="company" value={filters.company} onChange={handleFilterChange}>
                                <option value="">All Companies</option>
                                <option value="yamaha">Yamaha</option>
                                <option value="heco">Heco</option>
                                <option value="kesh">kesh</option>
                                <option value="kesh">Kadence</option>
                            </select>
                        </div>
                        <div className='filter-group'>
                            <label>Price</label>
                            <input
                                type="number"
                                name="minPrice"
                                placeholder="Min Price"
                                value={filters.minPrice}
                                onChange={handleFilterChange}
                            />
                            <input
                                type="number"
                                name="maxPrice"
                                placeholder="Max Price"
                                value={filters.maxPrice}
                                onChange={handleFilterChange}
                            />
                        </div>
                        <button className='btn' onClick={handleApplyFilters}>Apply Filters</button>
                    </div>
                    <h2>Products</h2>
                    <div></div>
                    <div className='product-list'>
                        {renderProducts}
                    </div>
                </div>
            </ProductListStyled>
        </>
    );
};

export default ProductListing;