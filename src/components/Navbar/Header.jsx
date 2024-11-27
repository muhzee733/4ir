import React, { useEffect, useState } from 'react'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // handleScroll()

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
    <div className={isSticky ? "position-sticky" : ""}>
      <h1>4ir</h1>
      <h2>4ir</h2>
      <h3>4ir</h3>
      <h4>4ir</h4>
      <h5>4ir</h5>
      <h6>4ir</h6>
      <p>Next.js Application</p>
    </div>
  )
}

export default Header