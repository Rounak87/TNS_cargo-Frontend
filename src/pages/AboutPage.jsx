import { FaShieldAlt, FaRocket, FaHandshake, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {

  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Reliability",
      description: "We ensure your cargo reaches its destination safely and on time, every time."
    },
    {
      icon: <FaRocket />,
      title: "Efficiency",
      description: "Our streamlined processes and advanced logistics solutions save you time and money."
    },
    {
      icon: <FaHandshake />,
      title: "Customer Focus",
      description: "We build lasting relationships with clients through exceptional service and transparent communication."
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Our extensive network enables us to provide seamless shipping solutions worldwide."
    }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: '#1e40af', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>About TNS Cargo India Services</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto' }}>
            Your Trusted Partner for Global Logistics Solutions Since 2010
          </p>
        </div>
      </div>
      
      {/* Company Overview */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid',
            gap: '3rem',
            alignItems: 'center'
          }} className="md-grid-cols-2">
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2563eb' }}>Our Story</h2>
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                Established in 2010, TNS Cargo India Services began as a prominent freight forwarding company headquartered in 
                New Delhi, with a strategic vision to revolutionize international logistics. Founded by industry veterans with decades 
                of combined experience, we quickly established ourselves as an authority in the logistics sector across India.
              </p>
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                Based in the heart of New Delhi at E51-A Vishwakarma Colony, we've built a formidable reputation for handling 
                all types of commodities - from standard cargo to specialized shipments including hazardous materials, 
                perishable goods, oversized equipment, and high-value merchandise. Our expertise spans across all major transportation modes 
                and trade routes.
              </p>
              <p style={{ marginBottom: '1rem', fontSize: '1.05rem' }}>
                With an elite team of logistics professionals and an extensive global network of partners, we deliver comprehensive 
                end-to-end shipping solutions precisely tailored to each client's unique requirements. Our unwavering commitment to 
                excellence and customer satisfaction has established us as one of India's most trusted logistics partners.
              </p>
              <p style={{ fontSize: '1.05rem' }}>
                Today, TNS Cargo India Services handles tens of thousands of shipments annually, connecting businesses 
                across 120+ countries worldwide. We continue to expand our service offerings and enhance our technological capabilities 
                to meet the dynamic challenges of global trade and supply chain management in the 21st century.
              </p>
            </div>
            <div style={{ order: '-1' }} className="md-order-last">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="TNS Cargo Global Logistics Network" 
                style={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', width: '100%', animation: 'fadeIn 1s ease-out' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision and Mission */}
      <section style={{ backgroundColor: '#f9fafb', padding: '4rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid',
            gap: '3rem'
          }} className="md-grid-cols-2">
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2563eb' }}>Our Vision</h2>
              <p>
                To be the most reliable and innovative logistics partner, connecting businesses globally with 
                seamless supply chain solutions that drive growth and success.
              </p>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2563eb' }}>Our Mission</h2>
              <p>
                To deliver exceptional logistics services that exceed customer expectations through operational 
                excellence, technological innovation, and a passionate commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Core Values</h2>
            <p style={{ maxWidth: '42rem', margin: '0 auto' }}>
              These principles guide our decisions, shape our culture, and define how we conduct business every day.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }} className="md-grid-cols-2 lg-grid-cols-4">
            {values.map((value, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#2563eb', fontSize: '1.875rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: '#4b5563' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* Certifications */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Certifications</h2>
            <p style={{ maxWidth: '42rem', margin: '0 auto' }}>
              We adhere to the highest industry standards and are recognized for our commitment to quality and compliance.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
              textAlign: 'center', 
              width: '16rem' 
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>ISO</div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>ISO 9001:2015</h3>
              <p style={{ color: '#4b5563' }}>Quality Management System</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
              textAlign: 'center', 
              width: '16rem' 
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>IATA</div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>IATA Accredited</h3>
              <p style={{ color: '#4b5563' }}>International Air Transport Association</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
              textAlign: 'center', 
              width: '16rem' 
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>FIATA</div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>FIATA Member</h3>
              <p style={{ color: '#4b5563' }}>International Federation of Freight Forwarders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
