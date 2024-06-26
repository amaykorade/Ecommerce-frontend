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
                            <li>this is wrong </li>
                            <li>this is wrong </li>
                            <li>this is wrong </li>
                            <li>this is wrong </li>
                            <li>this is wrong </li>
                            <li>this is wrong </li>
                        </div>

                        {/* </ul> */}
                    </div>
                </div>
            </div>
        </AboutStyled>

    )
}

export default About