import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      // EmailJS Configuration - Environment Variables
      // To change email settings, update the .env file
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; 
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; 

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: import.meta.env.VITE_COMPANY_EMAIL
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitted(true);
      setIsSending(false);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again or contact us directly.');
      setIsSending(false);
    }
  };
  
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: '#1e40af', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto' }}>
            Have questions or need a quote? Our team is ready to assist you with all your logistics needs.
          </p>
        </div>
      </div>
      
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem'
        }} className="lg-grid-cols-3">
          {/* Contact Information */}
          <div className="lg-col-span-1">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Get in Touch</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: '#2563eb', marginTop: '0.25rem' }}>
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Our Office</h3>
                  <p>E51-A GROUND FLOOR, VISHWAKARMA COLONY,</p>
                  <p>M.B ROAD, BADARPUR NEW DELHI-110044</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: '#2563eb', marginTop: '0.25rem' }}>
                  <FaPhone size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Phone</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 87210</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: '#2563eb', marginTop: '0.25rem' }}>
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Email</h3>
                  <p>info@tnscargoindiaservices.com</p>
                  <p>sales@tnscargoindiaservices.com</p>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div style={{ 
            backgroundColor: '#f9fafb', 
            padding: '2rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
          }} className="lg-col-span-2">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ color: '#22c55e', fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Thank You!</h3>
                <p style={{ marginBottom: '1.5rem' }}>Your message has been sent successfully. We'll get back to you shortly.</p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      message: ''
                    });
                  }}
                  style={{ 
                    padding: '0.5rem 1.5rem',
                    backgroundColor: isHovered ? '#1d4ed8' : '#2563eb',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '0.375rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease-in-out'
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Send Us a Message</h2>
                
                {error && (
                  <div style={{
                    backgroundColor: '#fee2e2',
                    border: '1px solid #ef4444',
                    color: '#dc2626',
                    padding: '1rem',
                    borderRadius: '0.375rem',
                    marginBottom: '1rem'
                  }}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1.5rem'
                  }} className="md-grid-cols-2">
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ 
                          width: '100%', 
                          padding: '0.5rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          outline: 'none'
                        }}
                        required
                      />
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ 
                          width: '100%', 
                          padding: '0.5rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          outline: 'none'
                        }}
                        required
                      />
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ 
                          width: '100%', 
                          padding: '0.5rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ 
                          width: '100%', 
                          padding: '0.5rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          outline: 'none'
                        }}
                        required
                      />
                    </div>
                    
                    <div style={{ gridColumn: '1 / -1' }} className="md-col-span-2">
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }} htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ 
                          width: '100%', 
                          padding: '0.5rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.375rem',
                          outline: 'none'
                        }}
                        required
                      ></textarea>
                    </div>
                    
                    <div style={{ gridColumn: '1 / -1' }} className="md-col-span-2">
                      <button
                        type="submit"
                        disabled={isSending}
                        style={{ 
                          padding: '0.75rem 2rem',
                          backgroundColor: isSending ? '#9ca3af' : (isHovered ? '#1d4ed8' : '#2563eb'),
                          color: 'white',
                          fontWeight: '600',
                          borderRadius: '0.375rem',
                          border: 'none',
                          cursor: isSending ? 'not-allowed' : 'pointer',
                          transition: 'background-color 0.15s ease-in-out',
                          opacity: isSending ? 0.7 : 1
                        }}
                        onMouseEnter={() => !isSending && setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        {isSending ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Global Service Network Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '3rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Our Global Service Network</h2>
          <p style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto', marginBottom: '2.5rem', color: '#4b5563' }}>
            With offices and partners worldwide, we provide seamless logistics solutions across 6 continents and over 120 countries.
          </p>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          }} className="md-grid-cols-2 lg-grid-cols-3">
            
            {/* Regional Offices */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              borderTop: '4px solid #2563eb'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>Regional Offices</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li>
                    <strong>New Delhi, India (HQ)</strong>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>E51-A GROUND FLOOR, VISHWAKARMA COLONY, M.B ROAD, BADARPUR NEW DELHI-110044</p>
                  </li>
                  <li>
                    <strong>Mumbai, India</strong>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Bandra Kurla Complex, Mumbai 400051</p>
                  </li>
                  <li>
                    <strong>Dubai, UAE</strong>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Business Bay, Dubai</p>
                  </li>
                  <li>
                    <strong>Singapore</strong>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Changi Business Park, Singapore</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service Coverage */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              borderTop: '4px solid #8b5cf6'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>Service Coverage</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Asia Pacific</span>
                    <span style={{ fontWeight: '500' }}>24 countries</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Europe</span>
                    <span style={{ fontWeight: '500' }}>36 countries</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Americas</span>
                    <span style={{ fontWeight: '500' }}>21 countries</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Middle East & Africa</span>
                    <span style={{ fontWeight: '500' }}>39 countries</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                    <span style={{ fontWeight: '600' }}>Total Global Coverage</span>
                    <span style={{ fontWeight: '600' }}>120+ countries</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Quick Tracking Preview */}
            <div style={{ 
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              borderTop: '4px solid #10b981'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#111827' }}>Quick Shipment Tracking</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  Enter your tracking number to get real-time updates on your shipment.
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="text"
                    placeholder="Enter tracking number"
                    style={{
                      width: '100%',
                      padding: '0.625rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      marginBottom: '0.75rem'
                    }}
                  />
                  <button style={{
                    width: '100%',
                    padding: '0.625rem',
                    backgroundColor: '#10b981',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '0.375rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}>
                    Track Shipment
                  </button>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '0.75rem'
                }}>
                  <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                  <span>Or visit our <a href="/track" style={{ color: '#10b981', textDecoration: 'underline' }}>tracking page</a> for detailed options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
