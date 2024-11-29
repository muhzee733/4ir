import Navbar from "./Navbar/Header";
import Footer from "./Navbar/Footer";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.min.js')
  })
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
