import React, { useEffect, useState } from "react";
import MainLogo from "../../../public/assets/images/4IRLogomain.png";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <header className="bg-transparent custom-navbar">
        <div className="container-fluid">
          <div className="row header-main-row">
            <div className="col-lg-2 col-md-6 col col-sm-4 d-flex justify-content-left align-items-center">
              <Link href="/">
                <Image src={MainLogo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="col-lg-8 custom-hide">
              <ul className="d-flex align-items-center justify-content-around list-unstyled h-100 fs-5">
                <li>
                  <Link href="/"
                    className={`header-nav-li text-decoration-none ${isActive("/") ? "active-link" : ""}`}>
                    <span className={`header-nav-li text-decoration-none ${isActive("/")
                      ? "header-nav-li-span1"
                      : "header-nav-li-span"}`}>
                      <FaCircle size={7} />
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us"
                    className={`header-nav-li text-decoration-none ${isActive("/about-us") ? "active-link" : ""
                      }`}
                  >
                    <span className={`header-nav-li text-decoration-none ${isActive("/about-us")
                      ? "header-nav-li-span1"
                      : "header-nav-li-span"}`}>
                      <FaCircle size={7} />
                    </span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services"
                    className={`header-nav-li text-decoration-none ${isActive("/services") ? "active-link" : ""}`}>
                    <span className={`header-nav-li text-decoration-none ${isActive("/services")
                      ? "header-nav-li-span1"
                      : "header-nav-li-span"}`}>
                      <FaCircle size={7} />
                    </span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`header-nav-li text-decoration-none ${isActive("/blog") ? "active-link" : ""}`}>
                    <span className={`header-nav-li text-decoration-none ${isActive("/blog")
                      ? "header-nav-li-span1"
                      : "header-nav-li-span"}`}>
                      <FaCircle size={7} />
                    </span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us"
                    className={`header-nav-li text-decoration-none ${isActive("/contact-us") ? "active-link" : ""}`}>
                    <span className={`header-nav-li text-decoration-none ${isActive("/contact-us")
                      ? "header-nav-li-span1"
                      : "header-nav-li-span"}`}>
                      <FaCircle size={7} />
                    </span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 d-flex justify-content-end align-items-center custom-hide">
              <button className="btn-2">Book a Demo</button>
            </div>
            <div className="col-md-6 custom-show col-sm-8 col d-flex align-items-center justify-content-end">
              <FiAlignJustify
                data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                className="text-white"
                style={{ fontSize: "30px" }} />
            </div>
          </div>
        </div>
      </header>

      <div className="offcanvas offcanvas-start offcanvasmain text-white" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

        <div className="offcanvas-header d-flex justify-content-between">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel" data-bs-dismiss="offcanvas" aria-label="Close" type="button">Back</h5>
          <FiX data-bs-dismiss="offcanvas" aria-label="Close" size={30} />
        </div>

        <div className="offcanvas-body">
          <div>
            <ul className="list-unstyled p-2 sidebar-ul">
              <li className="mb-3">
                <Link href={"/"}
                  className={`header-nav-li text-decoration-none ${isActive("/") ? "active-link" : ""}`}>
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link href={"/about-us"}
                  className={`header-nav-li text-decoration-none ${isActive("/about-us") ? "active-link" : ""}`}>
                  About Us
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={"/services"} data-bs-toggle="dropdown"
                  className={`header-nav-li text-decoration-none dropdown-toggle ${isActive("/services") ? "active-link" : ""}`}>
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="mb-3">
                <Link href={"/blog"}
                  className={`header-nav-li text-decoration-none ${isActive("/blog") ? "active-link" : ""}`}>
                  Blog
                </Link>
              </li>
              <li className="mb-3">
                <Link href={"/contact-us"}
                  className={`header-nav-li text-decoration-none ${isActive("/contact-us") ? "active-link" : ""}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
