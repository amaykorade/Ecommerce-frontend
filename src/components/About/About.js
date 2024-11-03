import React from 'react'
import { AboutStyled } from './About.styled'

function About() {
    return (
        <AboutStyled>
            <div className='about'>
                <h2>About Us</h2>
                <div className='main'>
                    <div id='one' className='cont'>
                        <h5>Who we are ?</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything .</p>
                    </div>
                    <div id='two' className='cont'>
                        <h5>What we do ?</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything .</p></div>
                    <div id='three'>
                        <h5>LEGAL COMPLIANCES</h5>
                        {/* <ul> */}
                        <div className='rules'>
                            <li>We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data. </li>
                            <li>By using our website and purchasing our products, you agree to our terms and conditions. Please read them carefully before making a purchase. </li>
                            <li>We offer a 25 days return policy. If you are not satisfied with your purchase, you may return it within this period for a full refund, subject to certain conditions. </li>
                            <li>We provide shipping options for domestic and international orders. Delivery times and shipping costs may vary based on your location and the selected shipping method. </li>
                            <li>All payment transactions are processed securely through our payment processor. We do not store your credit card information on our servers. </li>
                            <li>As a consumer, you have rights under local consumer protection laws. If you believe your rights have been violated, please contact us.</li>
                            <li>We strive to provide accurate product descriptions. However, we do not guarantee that the information is error-free. If you notice discrepancies, please contact us.</li>
                        </div>

                        {/* </ul> */}
                    </div>
                </div>
            </div>
        </AboutStyled>

    )
}

export default About