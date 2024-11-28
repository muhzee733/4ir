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
      <header className="bg-dark">
        <div className="container">
          <div className="row header-main-row">
            <div className="col-lg-2 col-md-6 col col-sm-4 d-flex justify-content-left align-items-center">
              <Link href="/">
                <Image src={MainLogo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="col-lg-8 custom-hide">
              <ul className="d-flex align-items-center justify-content-around list-unstyled h-100 fs-5">
                <li>
                  <Link
                    href="/"
                    className={`header-nav-li text-decoration-none ${
                      isActive("/") ? "active-link" : ""
                    }`}
                  >
                    <span
                      className={`header-nav-li text-decoration-none ${
                        isActive("/")
                          ? "header-nav-li-span1"
                          : "header-nav-li-span"
                      }`}
                    >
                      <FaCircle size={7} />
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className={`header-nav-li text-decoration-none ${
                      isActive("/about-us") ? "active-link" : ""
                    }`}
                  >
                    <span
                      className={`header-nav-li text-decoration-none ${
                        isActive("/about-us")
                          ? "header-nav-li-span1"
                          : "header-nav-li-span"
                      }`}
                    >
                      <FaCircle size={7} />
                    </span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={`header-nav-li text-decoration-none ${
                      isActive("/services") ? "active-link" : ""
                    }`}
                  >
                    <span
                      className={`header-nav-li text-decoration-none ${
                        isActive("/services")
                          ? "header-nav-li-span1"
                          : "header-nav-li-span"
                      }`}
                    >
                      <FaCircle size={7} />
                    </span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`header-nav-li text-decoration-none ${
                      isActive("/blog") ? "active-link" : ""
                    }`}
                  >
                    <span
                      className={`header-nav-li text-decoration-none ${
                        isActive("/blog")
                          ? "header-nav-li-span1"
                          : "header-nav-li-span"
                      }`}
                    >
                      <FaCircle size={7} />
                    </span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className={`header-nav-li text-decoration-none ${
                      isActive("/contact-us") ? "active-link" : ""
                    }`}
                  >
                    <span
                      className={`header-nav-li text-decoration-none ${
                        isActive("/contact-us")
                          ? "header-nav-li-span1"
                          : "header-nav-li-span"
                      }`}
                    >
                      <FaCircle size={7} />
                    </span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 d-flex justify-content-end align-items-center custom-hide">
              <button className="btn-1">Book a Demo</button>
            </div>
            <div
              className="col-md-6 custom-show col-sm-8 col d-flex align-items-center justify-content-end"
              onClick={() => toggleSidebar()}
            >
              <FiAlignJustify
                className="text-white"
                style={{ fontSize: "30px" }}
              />
            </div>
          </div>
        </div>
      </header>
      {isCollapsed ? (
        ""
      ) : (
        <div className="d-flex header-sidebar-body">
          <div
            className={`text-white p-4 header-sidebar  ${
              isCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
            }`}
            style={{
              width: isCollapsed ? "0px" : "280px",
              transition: "width  0.3s ease",
            }}
          >
            <div className="d-flex align-items-center justify-content-between mb-5">
              <span onClick={()=> toggleSidebar()}>Back</span>
              <h6>
                <FiX onClick={()=> toggleSidebar()}/>
              </h6>
            </div>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
