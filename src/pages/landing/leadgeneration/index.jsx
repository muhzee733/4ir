import Layout from '@/components/layout'
import React from 'react'
import "./leadgeneration.css"
import H2 from '@/components/Typography/H2'
import Para from '@/components/Typography/Para'
import { FiCheck } from "react-icons/fi";

const Index = () => {
    return (
        <Layout>
            {/* shahbaz */}
            <section>
                <div className='main-wrapper text-white'>
                    <div className='container-fluid'>
                        <img src='/images/4IR-logo-main.png' width={200} />
                        <div className='row mt-5'>
                            <div className='col-lg-6'>
                                <H2 title="Supercharge your Sales Teams with "
                                    breakpoint={true}
                                    spanTitle="AI-Driven Solutions."
                                />
                                <Para title="Say goodbye to the stress of sales teams and hello to human-like AI that works 24/7." />
                                <div className='my-5 d-flex justify-content-between'>
                                    <span className="bannerSpan"><FiCheck className='primary'/> No complex Software</span>
                                    <span className="bannerSpan"><FiCheck className='primary'/> Easy-integration</span>
                                    <span className="bannerSpan"><FiCheck className='primary'/> 24/7 Availability</span>
                                </div>

                                <a href='#' className='btn-1 px-5 py-3'>Book a free Demo</a>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <figure >
                                    <img className='bannerImg1' src='/images/man-in-frame.png' alt='lead generation image' width={480} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <span className='text-white'>not ok</span>


            {/* Azan */}




            {/* anila */}




        </Layout>
    )
}

export default Index