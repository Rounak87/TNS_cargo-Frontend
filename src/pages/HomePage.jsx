import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TrackingSection from '../components/TrackingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  return (
    <div>
     
      <Hero />
      
      
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={{ 
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{ 
            display: 'grid',
            gap: '3rem',
            alignItems: 'center'
          }} className="md-grid-cols-2">
            <div className="reveal-from-right" style={{ animation: 'slideInRight 1s ease-out' }}>
              <h2 style={{ 
                fontSize: '1.875rem', 
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>About TNS Cargo India Services</h2>
              <p style={{ 
                color: '#4b5563',
                marginBottom: '1rem'
              }}>
                Founded in 2010, TNS Cargo India Services has established itself as a leading international
                logistics provider, specializing in global freight forwarding and supply chain solutions.
              </p>
              <p style={{ 
                color: '#4b5563',
                marginBottom: '1.5rem'
              }}>
                With a dedicated team of logistics experts and a vast network of partners worldwide,
                we deliver reliable, efficient, and cost-effective shipping solutions tailored to
                meet the unique requirements of businesses across various industries.
              </p>
              <Link 
                to="/about" 
                style={{ 
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  display: 'inline-block',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  animation: 'fadeIn 1.5s ease-out'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#1d4ed8';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Learn More About Us
              </Link>
            </div>
            <div style={{ order: '-1' }} className="md-order-last reveal-from-left">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="TNS Cargo logistics operations" 
                style={{ 
                  borderRadius: '0.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  width: '100%',
                  animation: 'slideInLeft 1s ease-out',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 15px 30px -10px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
              />
            </div>
          </div>
        </div>
      </section>
      
      
      <ServicesSection />
      
      
      <StatsSection />
      
      
      <TrackingSection />
      
      
      <TestimonialsSection />
      
      
      <section style={{ 
        padding: '4rem 0', 
        backgroundColor: '#1e3a8a', 
        color: 'white', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '10%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            animation: 'float 8s infinite ease-in-out'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '20%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            animation: 'float 6s infinite ease-in-out'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '5%',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            animation: 'float 10s infinite ease-in-out'
          }}></div>
        </div>
        
        <div style={{ 
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: 'bold',
            marginBottom: '1rem',
            animation: 'fadeInUp 0.8s ease-out'
          }}>Ready to Ship with Confidence?</h2>
          <p style={{ 
            maxWidth: '42rem',
            margin: '0 auto',
            marginBottom: '2rem',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Get in touch with our logistics experts today to discuss your shipping requirements and receive a customized solution.
          </p>
          <Link 
            to="/contact" 
            style={{ 
              padding: '0.75rem 2rem',
              backgroundColor: '#eab308',
              color: 'black',
              fontWeight: '600',
              borderRadius: '0.375rem',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              animation: 'pulse 2s infinite ease-in-out, fadeInUp 1.2s ease-out',
              transform: 'translateZ(0)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#facc15';
              e.target.style.transform = 'translateY(-3px) translateZ(0)';
              e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#eab308';
              e.target.style.transform = 'translateY(0) translateZ(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
