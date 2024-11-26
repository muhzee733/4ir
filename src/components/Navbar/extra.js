import React from 'react'

const extra = () => {
  return (
    <div>

<div className="footer-row">
          <div className="footer-main">
            <Link href="/" className="footer-logo">
              <Image src={MainLogo} id="logo-img" className="img-fluid" alt="Logo" priority />
            </Link>
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <form>
              <div className="input-group">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mail" />
                <Link href="" data-cursor="pointer" className="btn-basic">Subscribe</Link>
              </div>
            </form>
            <ul className="social-links">
              <li><Link href="https://www.facebook.com/4IRinc" target="_blank"><Image src={Facebook} className="img-fluid" alt="facebook" /></Link></li>
              <li><Link href="https://www.linkedin.com/company/fourth-industrial-revolution-inc/" target="_blank"><Image src={Linkedin} className="img-fluid" alt="linkedin" /></Link></li>
              <li><Link href="https://www.youtube.com/@BarryKrevoy" target="_blank"><Image src={Youtube} className="img-fluid" alt="youtube" /></Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="link-section">
            <div className="footer-title" onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}>
              <Image src={Star} className="img-fluid" alt="star" priority />
              Quick Link
            </div>
            <div className={`footer-content ${isQuickLinksOpen ? 'open' : ''}`}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
              </ul>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="link-section">
            <div className="footer-title" onClick={() => setServicesOpen(!isServicesOpen)}>
              <Image src={Star} className="img-fluid" alt="star" priority />
              Our service
            </div>
            <div className={`footer-content ${isServicesOpen ? 'open' : ''}`}>
              <ul>
                <li><Link href="/services/StrategicCounseling">Strategic Counselling</Link></li>
                <li><Link href="/services/AitalkAssist">AI Talk Assist</Link></li>
                <li><Link href="/services/TrainingEducation">Training & Education</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-copyright">
          <h4>© 2024 4IR All the Copyright Reserved.</h4>
          <ul className="footer-links">
            <li><Link href="/html/privacy.html">Privacy Policy </Link></li>
            <li><Link href="/html/terms.html">Terms & Conditions </Link></li>
          </ul>
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




    </div>
  )
}

export default extra