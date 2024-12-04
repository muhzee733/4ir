import Layout from '@/components/layout'
import React from 'react'
import "./leadgeneration.css"
import H1 from '@/components/Typography/H1'
import H2 from '@/components/Typography/H2'
import Para from '@/components/Typography/Para'
import { FiCheck } from "react-icons/fi";
import H5 from '@/components/Typography/H5'

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
{/* Azan */}



            {/* anila */}

            <section>
  <div className="sec-three-wrapper">
    <div className="container">
        <div className="sec-three-content align-items-center justify-content-center">
              <H1 title="introducing"
              breakpoint={true}
              spanTitle=" ai talk assist"
              className="text-uppercase text-white text-center "/>
              <div>

               <H5
                title="The Revolutionary Voice AI Platform " className={"text-center text-white mt-5 "}/>

              </div>
              <p class="text-center fs-1 mt-5">Transform your sales process in just two days—no long wait times, hassle</p> 
              
          </div>
    </div>
  </div>
</section>


        </Layout>
    )
}

export default Index