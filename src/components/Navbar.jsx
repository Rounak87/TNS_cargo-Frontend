import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShip, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{ backgroundColor: '#1e40af', color: 'white', padding: '1rem 0' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaShip style={{ fontSize: '1.5rem' }} />
          <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
            TNS Cargo India Services
          </Link>
        </div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '1.5rem' }} className="md-flex">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
          <Link to="/track" style={{ color: 'white', textDecoration: 'none' }}>Track Shipment</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: 'block' }} className="md-hidden">
          <button onClick={toggleMenu} style={{ fontSize: '1.5rem', background: 'none', border: 'none', color: 'white' }}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{ backgroundColor: '#1d4ed8', padding: '0.5rem 0' }} className="md-hidden">
          <div style={{ 
            width: '100%', 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 15px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <Link to="/" 
              style={{ display: 'block', padding: '0.5rem 0', color: 'white', textDecoration: 'none' }} 
              onClick={toggleMenu}>Home</Link>
            <Link to="/about" 
              style={{ display: 'block', padding: '0.5rem 0', color: 'white', textDecoration: 'none' }} 
              onClick={toggleMenu}>About Us</Link>
            <Link to="/services" 
              style={{ display: 'block', padding: '0.5rem 0', color: 'white', textDecoration: 'none' }} 
              onClick={toggleMenu}>Services</Link>
            <Link to="/track" 
              style={{ display: 'block', padding: '0.5rem 0', color: 'white', textDecoration: 'none' }} 
              onClick={toggleMenu}>Track Shipment</Link>
            <Link to="/contact" 
              style={{ display: 'block', padding: '0.5rem 0', color: 'white', textDecoration: 'none' }} 
              onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
