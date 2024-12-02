import React from 'react'
import Untitled from "@/images/img_1.png"
import Image from 'next/image'
import "./Expertise.css"
import Para from '../typography/Para'


const Expertise = () => {
    return (
        <div className="container">
            <div className="row pb-4">
                <div className="col-lg-6 col-md-12 col-sm-12  py-5">
                    <div className='miancol1'>
                    <div className='heading'>Our Expertise</div>
                    <div className="subheading">Driving Innovation <span style={{ color: '#FFCE00' }}> Forward</span></div>
                    <div className="Expertisepara">
                        <Para paragraph="At Fourth Industrial Revolution Inc., we are dedicated to guiding businesses through the transformative power of artificial intelligence. With a team of seasoned experts at the helm, specializing in AI consulting and product solutions, we provide tailored AI solutions that propel your business into the future. Explore our diverse skill set and experience in cutting-edge technologies, including machine learning algorithms and natural language processing. We're equipped to tackle your toughest challenges and empower your organization to thrive in the dynamic landscape of the Fourth Industrial Revolution."/>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                    <figure>
                        <Image src={Untitled} className="expertiseimg" alt="expertise Image" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Expertise