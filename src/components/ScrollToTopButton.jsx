import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            right: '25px',
            bottom: '25px',
            zIndex: 99,
            border: 'none',
            outline: 'none',
            backgroundColor: '#2563eb',
            color: 'white',
            cursor: 'pointer',
            padding: '15px',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            opacity: 0.8,
            transition: 'all 0.3s ease',
            animation: 'fadeIn 0.5s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#1d4ed8';
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#2563eb';
            e.target.style.opacity = '0.8';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
