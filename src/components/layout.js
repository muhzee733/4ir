import Navbar from './Navbar/Header'
import Footer from './Navbar/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '85vh' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}