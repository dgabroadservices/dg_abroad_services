import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Standard page layout wrapper with Navbar + Footer
 */
function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  )
}

export default PageLayout
