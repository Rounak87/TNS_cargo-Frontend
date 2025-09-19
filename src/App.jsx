import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import TrackingPage from './pages/TrackingPage'
import ScrollToTop from './components/ScrollToTop'
import LoadingAnimation from './components/LoadingAnimation'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Set first load to false after first render
    return () => {
      setIsFirstLoad(false);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isFirstLoad && <LoadingAnimation duration={2000} />}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/track" element={<TrackingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add more routes as you develop other pages */}
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App
