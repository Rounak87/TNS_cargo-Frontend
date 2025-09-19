import { useState, useEffect } from 'react';

const LoadingAnimation = ({ duration = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isLoading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeOut 0.5s forwards',
      animationDelay: `${duration - 500}ms`
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            width: '64px',
            height: '64px',
            margin: '8px',
            border: '4px solid #1e3a8a',
            borderRadius: '50%',
            animation: 'loader-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            borderColor: '#1e3a8a transparent transparent transparent'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '64px',
            height: '64px',
            margin: '8px',
            border: '4px solid #1e3a8a',
            borderRadius: '50%',
            animation: 'loader-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            borderColor: 'transparent #eab308 transparent transparent',
            animationDelay: '0.2s'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '64px',
            height: '64px',
            margin: '8px',
            border: '4px solid #1e3a8a',
            borderRadius: '50%',
            animation: 'loader-rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
            borderColor: 'transparent transparent #2563eb transparent',
            animationDelay: '0.4s'
          }}></div>
        </div>
      </div>
      <h2 style={{
        marginTop: '20px',
        color: '#1e3a8a',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        TNS Cargo <span style={{ color: '#eab308' }}>India</span>
      </h2>
      <p style={{
        marginTop: '10px',
        color: '#4b5563',
        fontSize: '14px'
      }}>
        Loading your global logistics solutions...
      </p>
    </div>
  );
};

export default LoadingAnimation;
