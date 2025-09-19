import { useState } from 'react';
import { FaShip, FaPlane, FaTruck, FaWarehouse, FaFileContract, FaGlobeAsia, FaTemperatureLow, FaBox, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div style={{ 
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      borderTop: '4px solid #2563eb',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ color: '#2563eb', fontSize: '1.875rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>{description}</p>
      <div style={{ marginTop: 'auto' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Key Features:</h4>
        <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
          {features.map((feature, idx) => (
            <li key={idx} style={{ color: '#4b5563', marginBottom: '0.25rem' }}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  
  const services = [
    {
      icon: <FaShip />,
      title: "Sea Freight",
      description: "Reliable and cost-effective ocean freight solutions for shipments of all sizes around the world.",
      features: [
        "FCL (Full Container Load) shipping",
        "LCL (Less than Container Load) consolidation",
        "Break bulk cargo handling",
        "Roll-on/Roll-off services",
        "Competitive rates with major shipping lines"
      ]
    },
    {
      icon: <FaPlane />,
      title: "Air Freight",
      description: "Fast and efficient air cargo services for time-sensitive shipments across the globe.",
      features: [
        "Express air freight solutions",
        "Consolidated air freight",
        "Charter services for urgent shipments",
        "Door-to-door delivery options",
        "Real-time tracking and visibility"
      ]
    },
    {
      icon: <FaTruck />,
      title: "Road Transport",
      description: "Comprehensive road freight and distribution services for domestic and cross-border shipments.",
      features: [
        "FTL (Full Truck Load) services",
        "LTL (Less than Truck Load) options",
        "Express delivery services",
        "Cross-border transportation",
        "Multi-modal transport solutions"
      ]
    },
    {
      icon: <FaWarehouse />,
      title: "Warehousing & Distribution",
      description: "Modern storage facilities and distribution solutions to optimize your supply chain.",
      features: [
        "Short and long-term storage options",
        "Inventory management systems",
        "Pick and pack services",
        "Cross-docking facilities",
        "Distribution center operations"
      ]
    },
    {
      icon: <FaFileContract />,
      title: "Customs Clearance",
      description: "Expert customs brokerage services ensuring smooth and compliant border crossings for your cargo.",
      features: [
        "Import and export documentation",
        "Customs compliance consulting",
        "Duty and tax calculation",
        "Classification of goods",
        "Customs bond services"
      ]
    },
    {
      icon: <FaGlobeAsia />,
      title: "Project Cargo",
      description: "Specialized solutions for oversized, heavy-lift, and project cargo transportation.",
      features: [
        "Heavy lift cargo handling",
        "Out-of-gauge cargo transport",
        "Project planning and coordination",
        "Engineering and technical support",
        "Risk assessment and management"
      ]
    },
    {
      icon: <FaTemperatureLow />,
      title: "Temperature-Controlled Logistics",
      description: "End-to-end cold chain solutions for temperature-sensitive products.",
      features: [
        "Refrigerated containers and vehicles",
        "Temperature monitoring systems",
        "Pharmaceutical logistics",
        "Cold storage facilities",
        "Compliance with industry regulations"
      ]
    },
    {
      icon: <FaBox />,
      title: "Packaging & Consolidation",
      description: "Professional packaging and cargo consolidation services to optimize your shipping costs.",
      features: [
        "Custom packaging solutions",
        "Cargo consolidation",
        "Palletization services",
        "Labeling and marking",
        "Export packaging compliance"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage to protect your valuable shipments against loss or damage.",
      features: [
        "All-risk coverage options",
        "Door-to-door insurance",
        "Quick claims processing",
        "Customized insurance plans",
        "Risk management consultation"
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: '#1e40af', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Logistics Services</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            TNS Cargo India Services offers comprehensive logistics solutions tailored to meet your specific requirements.
            From air and sea freight to specialized cargo handling, we've got you covered.
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
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
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Solutions */}
      <section style={{ backgroundColor: '#f9fafb', padding: '4rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Customized Logistics Solutions</h2>
            <p style={{ maxWidth: '48rem', margin: '0 auto' }}>
              We understand that every business has unique logistics needs. That's why we offer tailored solutions
              designed specifically for your industry requirements and challenges.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }} className="md-grid-cols-2">
            <div style={{ 
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#2563eb' }}>Industry-Specific Solutions</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Automotive Logistics:</span> Specialized handling for automotive parts and vehicles
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Pharmaceutical Supply Chain:</span> Temperature-controlled and compliant logistics for medical products
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Retail & E-commerce:</span> Distribution and fulfillment services for online and retail businesses
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Industrial & Manufacturing:</span> Heavy equipment and machinery transportation
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Food & Beverage:</span> Temperature-sensitive food logistics and cold chain solutions
                  </div>
                </li>
              </ul>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#2563eb' }}>Value-Added Services</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Supply Chain Consulting:</span> Expert advice to optimize your logistics operations
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Digital Tracking Solutions:</span> Real-time visibility of your shipments worldwide
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Trade Compliance Services:</span> Navigating complex international trade regulations
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Order Management:</span> End-to-end order processing and fulfillment
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                  <div>
                    <span style={{ fontWeight: '600' }}>Reverse Logistics:</span> Efficient return processing and management
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#1e40af', color: 'white' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to Optimize Your Logistics?</h2>
          <p style={{ maxWidth: '42rem', margin: '0 auto', marginBottom: '2rem', fontSize: '1.125rem' }}>
            Contact our team today to discuss your logistics requirements and discover how TNS Cargo
            India Services can help streamline your supply chain.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link 
              to="/contact" 
              style={{ 
                padding: '0.75rem 2rem',
                backgroundColor: isQuoteHovered ? '#facc15' : '#eab308',
                color: 'black',
                fontWeight: '600',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                transition: 'background-color 0.15s ease-in-out'
              }}
              onMouseEnter={() => setIsQuoteHovered(true)}
              onMouseLeave={() => setIsQuoteHovered(false)}
            >
              Request a Quote
            </Link>
            <Link 
              to="/contact" 
              style={{ 
                padding: '0.75rem 2rem',
                backgroundColor: isContactHovered ? 'white' : 'transparent',
                color: isContactHovered ? '#1e40af' : 'white',
                fontWeight: '600',
                border: '2px solid white',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                transition: 'all 0.15s ease-in-out'
              }}
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
