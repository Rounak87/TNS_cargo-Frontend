import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', threshold = 0.1, animation = 'fadeIn', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationStyle = isVisible ? {
    opacity: 1,
    animation: `${animation} 0.8s ease-out forwards`,
    animationDelay: `${delay}ms`
  } : {
    opacity: 0
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
