import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import MainLogo from "../../../public/assets/images/4IRLogomain.png";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={isSticky ? "sticky-top" : ""}>
      <header className='bg-success d-none d-xl-block '>
        <div className='container '>
          <div className='row'>

            <div className='col-lg-2'>
              <Image src={MainLogo} id="logo-img" className="img-fluid" alt="Logo" priority />
            </div>
            <div className='col-lg-8 border'>
              <ul className='d-flex align-items-center justify-content-around list-unstyled h-100 fs-5 '>
                <li className='header-nav-li'>Home<span className='header-nav-span'></span></li>
                <li className='header-nav-li'>About us</li>
                <li className='header-nav-li'>Services</li>
                <li className='header-nav-li'>Blog</li>
                <li className='header-nav-li'>Contact Us</li>
              </ul>
            </div>
            <div className='col-lg-2'>
              <div className='d-flex justify-content-center'>
                <button className='btn-1'>Book a Demo</button>
              </div>
            </div>

          </div>
        </div>

      </header>


    </div>
  )
}

export default Header