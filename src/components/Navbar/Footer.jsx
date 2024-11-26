import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "../../../public/assets/images/4IRLogomain.png";
import Facebook from "../../../public/assets/svg/social/fb.svg";
import Youtube from "../../../public/assets/svg/youtube.svg";
import Linkedin from "../../../public/assets/svg/social/linkedin.svg";
import Star from "../../../public/assets/svg/star.svg";
// import './navbarStyle.css';
import '.././widgets.css'

const Footer = () => {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  return (
    <footer className="footer-main border-top footer-background rounded py-5">
      <div className="container mt-4 mb-1">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 footer-logo-div">
                {/* <div className=""> */}
                <Link href="/" className="footer-logo">
                  <Image src={MainLogo} id="logo-img" className="img-fluid" alt="Logo" priority />
                </Link>
                {/* </div> */}
              </div>
              <div className="col-lg-12 fs-5 my-3">SUBSCRIBE TO OUR NEWSLETTER</div>
              <div className="col-lg-12">
                <form>
                  <div className="input-group">
                    <input type="email" className=" footer-input" id="exampleFormControlInput1" placeholder="Enter your mail" />
                    <div><Link href="" data-cursor="pointer" className="btn-1 footerbtn2">Subscribe</Link></div>
                  </div>
                </form>
              </div>
              <div className="col-lg-12 my-5">
                <div className="d-flex ">
                  <div className="p-2 me-1"><Image src={Facebook} className="img-fluid" alt="facebook" /></div>
                  <div className="p-2 me-1"><Image src={Linkedin} className="img-fluid" alt="linkedin" /></div>
                  <div className="p-2 me-1 footer-social-icon"><Image src={Youtube} className="img-fluid" alt="youtube" /></div>
                </div>
              </div>
            </div>

          </div>

          {/* links section */}
          <div className="col-lg-6">
            <div className="row">
              {/* Quick Links Section */}
              <div className="col-lg-6 col-md-6">
                <div className="footer-title skyblue fs-4" onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}>
                  <Image src={Star} className="img-fluid me-3" alt="star" priority />
                  Quick Link
                </div>
                <div className={`footer-content ${isQuickLinksOpen ? 'open' : ''}`}>
                  <ul classname=" d-flex flex-column">
                    <div className="mt-4 ms-2 fs-5"><Link href="/" className="footerul">Home</Link></div>
                    <div className="mt-4 ms-2 fs-5"><Link href="/blog" className="footerul">Blog</Link></div>
                    <div className="mt-4 ms-2 fs-5"><Link href="/services" className="footerul">Services</Link></div>
                    <div className="mt-4 ms-2 fs-5"><Link href="/contact" className="footerul">Contact us</Link></div>
                  </ul>
                </div>
              </div>

              {/* Our Services Section */}
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="footer-title skyblue fs-4" onClick={() => setServicesOpen(!isServicesOpen)}>
                  <Image src={Star} className="img-fluid me-3" alt="star" priority />
                  Our service
                </div>
                <div className={`footer-content ${isServicesOpen ? 'open' : ''}`}>
                  <div classname="d-flex flex-column ">
                    <div className="mt-3 ms-5 fs-5"><Link href="/services/StrategicCounseling" className="footerul ">Strategic Counselling</Link></div>
                    <div className="mt-3 ms-5 fs-5"><Link href="/services/AitalkAssist" className="footerul">AI Talk Assist</Link></div>
                    <div className="my-3 ms-5 fs-5"><Link href="/services/TrainingEducation" className="footerul">Training & Education</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row border-top border-secondary">
          <div className="col-lg-12 col-md-12 col-sm-12 d-flex align-items-center justify-content-between py-3">
            <div>© 2024 4IR All the Copyright Reserved.</div>
            <div>Privacy Policy | Terms & Conditions</div>
          </div>
        </div>
      </div>


      {/* Styles */}
      <style jsx>{`
      .footer-content {
        display: block; /* Show by default on larger screens */
      }
      @media (max-width: 768px) {
        .footer-content {
          display: none; /* Hide by default on small screens */
        }
        .footer-content.open {
          display: block; /* Show only if open on small screens */
        }
        .footer-title {
          cursor: pointer;
        }
      }
    `}</style>

    </footer>
  )
}

export default Footer