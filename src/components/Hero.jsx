import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div style={{ 
      position: 'relative',
      background: 'linear-gradient(to right, #1e3a8a, #1d4ed8)',
      color: 'white',
      padding: '5rem 0'
    }}>
      <div style={{ 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ width: '100%', maxWidth: '700px' }}>
          <h1 style={{ 
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            animation: 'fadeInDown 1s ease-out'
          }}>Global Logistics Solutions For Your Business</h1>
          
          <p style={{ 
            fontSize: '1.25rem',
            marginBottom: '2rem',
            animation: 'fadeIn 1.2s ease-out'
          }}>TNS Cargo India Services provides reliable international shipping and logistics solutions to connect your business with the world.</p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', animation: 'fadeInUp 1.4s ease-out' }}>
            <Link 
              to="/contact" 
              style={{ 
                padding: '0.75rem 1.5rem',
                backgroundColor: '#eab308',
                color: 'black',
                fontWeight: '600',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
                display: 'inline-block',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                border: 'none',
                textAlign: 'center',
                lineHeight: '1.5',
                position: 'relative',
                overflow: 'hidden',
                zIndex: '10'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#facc15';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#eab308';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
              onClick={(e) => {
                // Button press effect
                e.currentTarget.style.transform = 'translateY(2px)';
                e.currentTarget.style.boxShadow = '0 0px 2px rgba(0, 0, 0, 0.2)';
                setTimeout(() => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }, 150);
              }}
              role="button"
              aria-label="Get a quote for logistics services"
            >
              Get a Quote
            </Link>
            <Link 
              to="/services" 
              style={{ 
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
                display: 'inline-block',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                lineHeight: '1.5',
                position: 'relative',
                overflow: 'hidden',
                zIndex: '10'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
              onClick={(e) => {
                // Button press effect
                e.currentTarget.style.transform = 'translateY(2px)';
                e.currentTarget.style.boxShadow = '0 0px 2px rgba(0, 0, 0, 0.2)';
                setTimeout(() => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }, 150);
              }}
              role="button"
              aria-label="Explore our logistics services"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract background pattern */}
      <div style={{ 
        position: 'absolute',
        inset: '0',
        overflow: 'hidden',
        opacity: '0.1'
      }}>
        <div style={{ 
          position: 'absolute',
          top: '-10rem',
          right: '-10rem',
          width: '20rem',
          height: '20rem',
          border: '4px solid white',
          borderRadius: '50%',
          animation: 'pulse 8s infinite ease-in-out'
        }}></div>
        <div style={{ 
          position: 'absolute',
          top: '10rem',
          right: '5rem',
          width: '10rem',
          height: '10rem',
          border: '4px solid white',
          borderRadius: '50%',
          animation: 'pulse 12s infinite ease-in-out'
        }}></div>
        <div style={{ 
          position: 'absolute',
          bottom: '10rem',
          right: '15rem',
          width: '15rem',
          height: '15rem',
          border: '4px solid white',
          borderRadius: '50%',
          animation: 'pulse 10s infinite ease-in-out'
        }}></div>
      </div>
    </div>
  );
};

export default Hero;
