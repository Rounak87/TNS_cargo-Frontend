import { FaShip, FaPlane, FaTruck, FaWarehouse, FaFileContract, FaGlobeAsia } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ServiceCard = ({ icon, title, description, image, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{ 
        backgroundColor: 'white', 
        borderRadius: '0.5rem',
        boxShadow: isHovered ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ 
        height: '160px', 
        overflow: 'hidden', 
        position: 'relative',
        borderBottom: '4px solid #3b82f6'
      }}>
        <img 
          src={image} 
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem'
        }}>
          {icon}
        </div>
      </div>
      
      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#4b5563', marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>
        <Link 
          to="/services" 
          style={{ 
            color: '#2563eb', 
            fontWeight: '600',
            textDecoration: isHovered ? 'underline' : 'none',
            display: 'inline-block'
          }}
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <FaShip />,
      title: "Sea Freight",
      description: "Reliable ocean freight solutions for all your shipment needs with competitive rates and global coverage.",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaPlane />,
      title: "Air Freight",
      description: "Fast and efficient air cargo services to expedite your time-sensitive deliveries worldwide.",
      image: "https://images.pexels.com/photos/33823209/pexels-photo-33823209.jpeg"
    },
    {
      icon: <FaTruck />,
      title: "Road Transport",
      description: "Comprehensive road freight and distribution services within India and neighboring countries.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaWarehouse />,
      title: "Warehousing",
      description: "Modern storage facilities with inventory management systems for your distribution needs.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaFileContract />,
      title: "Customs Clearance",
      description: "Expert customs brokerage services ensuring smooth and compliant border crossings.",
      image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
   
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ 
            color: '#2563eb', 
            fontWeight: '600', 
            textTransform: 'uppercase', 
            fontSize: '0.875rem', 
            letterSpacing: '0.05em',
            display: 'block',
            marginBottom: '0.75rem',
            animation: 'fadeIn 0.8s ease-out'
          }}>
            What We Offer
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', animation: 'fadeIn 1s ease-out' }}>
            Our Comprehensive Logistics Services
          </h2>
          <p style={{ 
            color: '#4b5563', 
            maxWidth: '42rem', 
            margin: '0 auto',
            fontSize: '1.125rem',
            animation: 'fadeIn 1.2s ease-out'
          }}>
            TNS Cargo India Services offers end-to-end logistics solutions tailored to meet your specific requirements,
            ensuring your cargo reaches its destination safely and on time.
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }} className="md-grid-cols-2 lg-grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
              index={index}
            />
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem', animation: 'fadeInUp 1.5s ease-out' }}>
          <Link
            to="/services"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: '600',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
