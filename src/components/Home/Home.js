import React, { useEffect } from 'react'
import ProductListing from '../ProductListing/ProductListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncProducts } from '../../features/products/productSlice'

export default function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncProducts())
    }, [dispatch])

    return (
        <div className='home'>
            <div></div>
            <ProductListing />
        </div>
    )
}
