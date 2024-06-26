import React, { useEffect } from 'react'
import ProductListing from '../ProductListing/ProductListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncProducts } from '../../features/products/productSlice'
import { HomeStyled } from './Home.styled'

export default function Home() {


    return (
        <>
            {/* <main> */}
            <HomeStyled>
                <div className='home'>
                    <div className='f-sec'>
                        <img className='banner-img' src='image/singer.jpg' alt='img' />
                        {/* <img className='banner-img' src='https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_640.jpg' alt='img' /> */}

                        <h3>Music around the world</h3>
                        <div className='f-sec-info'>
                            <div className='cards'>
                                <div className='card'>
                                    <img src='image/free-shipping.png' />
                                    <h5>Free Shipping</h5>
                                    <p>We provide free shipping across the India</p>
                                </div>
                                <div className='card'>
                                    <img src='image/high-quality.png' />
                                    <h5>Verified Products</h5>
                                    <p>Our products are 100% verified</p>
                                </div>
                                <div className='card'>
                                    <img src='image/customer-support.png' />
                                    <h5>Proper Support</h5>
                                    <p>We provide support before and after purchase</p>
                                </div>
                                <div className='card'>
                                    <img src='image/exchange.png' />
                                    <h5>Exchange</h5>
                                    <p>Product will be exchanged withing 15 days of purchase</p>
                                </div>
                            </div>
                        </div>
                        <div className='s-sec'>
                            <h3>Trending Musical Instruments</h3>
                            <div className='instruments'>
                                <div className='inst'>
                                    <img src='https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_640.jpg' />
                                    {/* <p>Guitars</p> */}
                                </div>
                                <div className='inst'>
                                    <img src='https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_640.jpg' />
                                    {/* <p>Guitars</p> */}
                                </div>
                                <div className='inst'>
                                    <img src='https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_640.jpg' />
                                    {/* <p>Guitars</p> */}
                                </div>
                                <div className='inst'>
                                    <img src='https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_640.jpg' />
                                    {/* <p>Guitars</p> */}
                                </div>
                                <div className='inst'>
                                    <img src='https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_640.jpg' />
                                    {/* <p>Guitars</p> */}
                                </div>
                            </div>

                        </div>

                        <div className='t-sec'>
                            <h3>COLLECTION OF BRANDS</h3>
                            <div className='brands'>
                                <img src='image/yamahainstbrand.png' />
                                <img src='image/kawaiinstbrand.png' />
                                <img src='image/rolandinstbrand.png' />
                                <img src='image/fenderinstbrand.png' />
                                <img src='image/cortekinstbrand.jpeg' />

                            </div>
                        </div>
                        <div className='fo-sec'>
                            <div className='fo-sec-main'>
                                <div className='left'>
                                    <h4>Harmonize Your Soul</h4>
                                    <p>With</p>
                                    <h5>THE MUSICAL STORE</h5>
                                </div>
                                <img src='image/musicalmart.jpeg' />
                            </div>

                        </div>
                    </div>

                </div>
            </HomeStyled>
            {/* </main> */}
        </>
    )
}
