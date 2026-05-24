import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import StrategicObjectives from './pages/StrategicObjectives'
import ThematicAreas from './pages/ThematicAreas'
import StrategyOfImpact from './pages/StrategyOfImpact'
import Volunteer from './pages/Volunteer'
import Partner from './pages/Partner'
import Donate from './pages/Donate'
import News from './pages/News'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work/strategic-objectives" element={<StrategicObjectives />} />
          <Route path="/our-work/thematic-areas" element={<ThematicAreas />} />
          <Route path="/our-work/strategy-of-impact" element={<StrategyOfImpact />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/partner" element={<Partner />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
