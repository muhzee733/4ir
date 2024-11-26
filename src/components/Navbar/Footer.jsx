import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "../../../public/assets/images/4IRLogomain.png";
import Facebook from "../../../public/assets/svg/social/fb.svg";
import Youtube from "../../../public/assets/svg/youtube.svg";
import Linkedin from "../../../public/assets/svg/social/linkedin.svg";
import Star from "../../../public/assets/svg/star.svg";
import ".././widgets.css";
import { FaBeer } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

const Footer = () => {
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  return (
    <footer className="footer-main border-top footer-background rounded py-4">
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-">
            <div className="row">
              <div className="col-lg-12 footer-logo">
                <div className="footer-logo-div">
                  <Link href="/" className="footer-logo">
                    <Image
                      src={MainLogo}
                      id="logo-img"
                      className="img-fluid"
                      alt="Logo"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-12 fs-5 my-3 footer-subtitle">
                SUBSCRIBE TO OUR NEWSLETTER
              </div>
              <div className="col-lg-12">
                <form>
                  <div className="input-group">
                    <input
                      type="email"
                      className="footer-input"
                      id="exampleFormControlInput1"
                      placeholder="Enter your mail"
                    />
                    <div>
                      <Link
                        href=""
                        data-cursor="pointer"
                        className="btn-1 footerbtn2"
                      >
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-12 my-3">
                <div className="d-flex footer-social-div">
                  <div className="p-2 me-1">
                    <Image
                      src={Facebook}
                      className="img-fluid"
                      alt="facebook"
                    />
                  </div>
                  <div className="p-2 me-1">
                    <Image
                      src={Linkedin}
                      className="img-fluid"
                      alt="linkedin"
                    />
                  </div>
                  <div className="p-2 me-1 footer-social-icon">
                    <Image src={Youtube} className="img-fluid" alt="youtube" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* links section */}
          <div className="col-lg-6">
            <div className="row">
              {/* Quick Links Section */}
              <div className="col-lg-6 col-md-6">
                <div
                  className="footer-title skyblue fs-4 my-3"
                  onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}
                >
                  <Image
                    src={Star}
                    className="img-fluid me-3"
                    alt="star"
                    priority
                  />
                  QUICK LINK
                </div>
                <div
                  className={`footer-content ${isQuickLinksOpen ? "open" : ""}`}
                >
                  <ul className=" d-flex flex-column">
                    <div className="mt-4 ms-2 fs-5">
                      <Link href="/" className="footerul">
                        Home
                      </Link>
                    </div>
                    <div className="mt-4 ms-2 fs-5">
                      <Link href="/blog" className="footerul">
                        Blog
                      </Link>
                    </div>
                    <div className="mt-4 ms-2 fs-5">
                      <Link href="/services" className="footerul">
                        Services
                      </Link>
                    </div>
                    <div className="mt-4 ms-2 fs-5">
                      <Link href="/contact" className="footerul">
                        Contact us
                      </Link>
                    </div>
                  </ul>
                </div>
              </div>

              {/* Our Services Section */}
              <div className="col-lg-6 col-md-12 my-3">
                <div
                  className="footer-title skyblue fs-4 d-flex"
                  onClick={() => setServicesOpen(!isServicesOpen)}
                >
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center">
                      <Image
                        src={Star}
                        className="img-fluid me-3"
                        alt="star"
                        priority
                      />
                      <div>OUR SERVICES</div>
                    </div>
                    <span className="d-lg-none d-md-none d-block-sm"><FiArrowDown /></span>
                  </div>
                </div>
                <div
                  className={`footer-content ${isServicesOpen ? "open" : ""}`}
                >
                  <div className="d-flex flex-column ">
                    <div className="mt-3 ms-5 fs-5">
                      <Link
                        href="/services/StrategicCounseling"
                        className="footerul "
                      >
                        Strategic Counselling
                      </Link>
                    </div>
                    <div className="mt-3 ms-5 fs-5">
                      <Link href="/services/AitalkAssist" className="footerul">
                        AI Talk Assist
                      </Link>
                    </div>
                    <div className="my-3 ms-5 fs-5">
                      <Link
                        href="/services/TrainingEducation"
                        className="footerul"
                      >
                        Training & Education
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row border-top border-secondary">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-start copyright p-0">
            <div>© 2024 4IR All the Copyright Reserved.</div>
          </div>
          <div className="p-0 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-end copyright">
            <div>Privacy Policy | Terms & Conditions</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
