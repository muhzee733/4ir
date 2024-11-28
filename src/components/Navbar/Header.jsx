import React, { useEffect, useState } from "react";
import MainLogo from "../../../public/assets/images/4IRLogomain.png";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const [isSticky, setIsSticky] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
    <>
      <div className={isSticky ? "sticky-top" : ""}>
        <header className="bg-dark d-none d-xl-block">
          <div className="container">
            <div className="row header-main-row">
              <div className="col-lg-2 d-flex justify-content-center align-items-center">
                <Link href="/">
                  <Image src={MainLogo} className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <div className="col-lg-8">
                <ul className="d-flex align-items-center justify-content-around list-unstyled h-100 fs-5">
                  <li>
                    <Link
                      href="/"
                      className={`header-nav-li text-decoration-none ${isActive("/") ? "active-link" : ""
                        }`}
                    >
                      <span className={`header-nav-li text-decoration-none ${isActive("/") ? "header-nav-li-span1" : "header-nav-li-span"
                        }`}>
                        <FaCircle size={7} />
                      </span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className={`header-nav-li text-decoration-none ${isActive("/about-us") ? "active-link" : ""
                        }`}
                    >
                      <span className={`header-nav-li text-decoration-none ${isActive("/about-us") ? "header-nav-li-span1" : "header-nav-li-span"
                        }`}>
                        <FaCircle size={7} />
                      </span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className={`header-nav-li text-decoration-none ${isActive("/services") ? "active-link" : ""
                        }`}
                    >
                      <span className={`header-nav-li text-decoration-none ${isActive("/services") ? "header-nav-li-span1" : "header-nav-li-span"
                        }`}>
                        <FaCircle size={7} />
                      </span>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className={`header-nav-li text-decoration-none ${isActive("/blog") ? "active-link" : ""
                        }`}
                    >
                      <span className={`header-nav-li text-decoration-none ${isActive("/blog") ? "header-nav-li-span1" : "header-nav-li-span"
                        }`}>
                        <FaCircle size={7} />
                      </span>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className={`header-nav-li text-decoration-none ${isActive("/contact-us") ? "active-link" : ""
                        }`}
                    >
                      <span className={`header-nav-li text-decoration-none ${isActive("/contact-us") ? "header-nav-li-span1" : "header-nav-li-span"
                        }`}>
                        <FaCircle size={7} />
                      </span>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 d-flex justify-content-end align-items-center">
                <button className="btn-1">Book a Demo</button>
              </div>
            </div>
          </div>
        </header>
      </div>


      {/* side bar nav */}
      <div className="headersidebar-main">
        <div className="d-flex justify-content-between">
          <div>
            <Link href="/">
              <Image src={MainLogo} className="img-fluid" alt="Logo" />
            </Link>
          </div>

          <button
            className="btn btn-info"
            onClick={toggleSidebar}
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            {/* {isCollapsed ? "☰" : "⇦"} */}
            ☰
          </button>
        </div>


        <div className="d-flex header-sidebar-body">
          {/* Sidebar */}
          <div
            className={`text-white header-sidebar  ${isCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
              }`}
            style={{
              width: isCollapsed ? "0px" : "280px",
              transition: "width  0.3s ease",
            }}
          >

            <div className="p-3">
              <div className="d-flex justify-content-between  text-info">
                {/* Back */}
                <FiX />
                <FiX size={30} onClick={toggleSidebar}/>
              </div>


              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="#" className="text-decoration-none ">
                    {!isCollapsed && "Home"}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-decoration-none ">
                    {!isCollapsed && "About US"}
                  </a>
                </li>
                <li className="mb-3">
                  <button
                    className="btn btn-link text-white text-decoration-none"
                    onClick={toggleDropdown}
                    style={{ paddingLeft: 0 }}
                  >
                    {!isCollapsed && "Services"}
                  </button>
                  {isDropdownOpen && (
                    <ul className="list-unstyled ms-4">
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Project 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-decoration-none text-white">
                          Project 2
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="mb-3">
                  <a href="#" className="text-decoration-none ">
                    {!isCollapsed && "Blog"}
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-decoration-none ">
                    {!isCollapsed && "Contact US"}
                  </a>
                </li>

              </ul>
            </div>
          </div>


        </div>


      </div>

    </>
  );
};

export default Header;
