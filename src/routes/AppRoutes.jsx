import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from '../components/layout/ScrollToTop'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Courses from '../pages/Courses'
import StudyAbroad from '../pages/StudyAbroad'
// import VisaAssistance from '../pages/VisaAssistance'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        {/* <Route path="/visa-assistance" element={<VisaAssistance />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
