import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaShip } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111827', color: 'white', paddingTop: '3rem', paddingBottom: '2rem' }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }}
        className="md-grid-cols-2 lg-grid-cols-4"
        >
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <FaShip style={{ fontSize: '1.5rem', color: '#60a5fa' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>TNS Cargo India Services</h3>
            </div>
            <p style={{ marginBottom: '1rem' }}>
              Your trusted partner for international logistics and cargo services. 
              We connect businesses globally with reliable shipping solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://facebook.com" style={{ color: '#60a5fa' }}>
                <FaFacebook style={{ fontSize: '1.25rem' }} />
              </a>
              <a href="https://twitter.com" style={{ color: '#60a5fa' }}>
                <FaTwitter style={{ fontSize: '1.25rem' }} />
              </a>
              <a href="https://linkedin.com" style={{ color: '#60a5fa' }}>
                <FaLinkedin style={{ fontSize: '1.25rem' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              borderBottom: '1px solid #60a5fa', 
              paddingBottom: '0.5rem'
            }}>
              Quick Links
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Our Services</Link></li>
              <li><Link to="/track" style={{ color: 'white', textDecoration: 'none' }}>Track Shipment</Link></li>
              <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Get a Quote</Link></li>
              <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              borderBottom: '1px solid #60a5fa', 
              paddingBottom: '0.5rem'
            }}>
              Our Services
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Air Freight</Link></li>
              <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Sea Freight</Link></li>
              <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Road Transport</Link></li>
              <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Customs Clearance</Link></li>
              <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Warehousing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              borderBottom: '1px solid #60a5fa', 
              paddingBottom: '0.5rem'
            }}>
              Contact Us
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <FaMapMarkerAlt style={{ color: '#60a5fa', marginTop: '0.25rem' }} />
                <span>TNS Cargo India Services, E51-A GROUND FLOOR, VISHWAKARMA COLONY, M.B ROAD, BADARPUR NEW DELHI-110044</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FaPhone style={{ color: '#60a5fa' }} />
                <span>+91 98765 43210</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FaEnvelope style={{ color: '#60a5fa' }} />
                <span>info@tnscargoindiaservices.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid #374151', 
          marginTop: '2.5rem', 
          paddingTop: '1.5rem', 
          textAlign: 'center', 
          fontSize: '0.875rem', 
          color: '#9ca3af'
        }}>
          <p>&copy; {new Date().getFullYear()} TNS Cargo India Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
