import React from 'react'
import { ContactStled } from './Contact.styled'

function ContactUs() {
    return (
        <ContactStled>
            <div className='contact-us'>
                <h3>Contact Us</h3>
                <div className='main'>

                    <div className='left'>
                        <h5>THE MUSICAL MART</h5>
                        <p className='add'>Flat no - 13 Audumbhar Shrushti Ambegaon Pune, 411041</p>
                        <div className='contact'>
                            <div className='contact-info'>
                                <img src='image/mobile.png' />
                                <p> +91 9146838750</p>
                            </div>
                            <div className='contact-info'>
                                <img src='image/email.png' />
                                <p>xyz@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.283308309915!2d73.8772131746521!3d18.516095269312018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c04f25d2b88b%3A0xfff13d0b61b3494b!2sThe%20Musical%20Mart!5e0!3m2!1sen!2sin!4v1719223446050!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </ContactStled>

    )
}

export default ContactUs