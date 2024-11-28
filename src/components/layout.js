import Navbar from "./Navbar/Header";
import Footer from "./Navbar/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
