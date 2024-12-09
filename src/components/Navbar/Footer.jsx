import React from 'react'
import SiteLogo from '../SiteLogo'
import facebook from "@/images/social_logo/facebook.png"
import linkedin from "@/images/social_logo/linkedin.png"
import youtube from "@/images/social_logo/youtube.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <section>
      <div className='Footer-wrapper text-white'>
        <div className="maindiv">
          <div className="container">
            <div className="row footer-1strow">
              <div className="col-lg-4 col-md-12 co-sm-12">

                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <figure><SiteLogo width="150px" height="auto" /></figure>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    <h5 className='footer-h5 custom-color'>Empower Your Business with AI</h5>
                    <p>AI Talk Assist is more than just a tool;</p>
                    <p>it’s the future of customer engagement</p>
                    <div className="footer-socials-links d-flex justify-content-between">
                      <figure><Image src={facebook} /></figure>
                      <figure><Image src={linkedin} /></figure>
                      <figure><Image src={youtube} /></figure>
                    </div>
                  </div>
                </div>


              </div>
              <div className="col-lg-4 col-md-6 co-sm-12">
                <h5 className='footer-h5'>Resources</h5>

                <ul className='list-unstyled footer-ul'>
                  <li><p>Our Knowledge base</p></li>
                  <li><p>AI Talk Assist Features</p></li>
                  <li><p>Try AI Talk Assist</p></li>
                  <li><p>Strategic Counselling</p></li>
                  <li><p>Contact AI Talk Assist Team</p></li>
                </ul> 
              </div>
              <div className="col-lg-4 col-md-6 co-sm-12 ">
                <h5 className='footer-h5'>Subscribe for update</h5>
                <form action="">
                  <input type="text" className="form-control input" placeholder="Name" />
                  <input type="number" className="form-control input" placeholder="Mobile Number" />
                  <input type="email" className="form-control input" placeholder="Email Address" />

                  <button className='btn-1 footer-btn'>Subscribe</button>
                </form>
              </div>
            </div>

            <div className="row footer-copyright ">
              <div className="col-lg-12 d-flex justify-content-between pt-4 footer-copyright-body">
                <div className="mb-3">
                  4IR @ 2024 All the Copyright Reserved.
                </div>
                <div className="">
                  Privacy Policy | Terms & Conditions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer