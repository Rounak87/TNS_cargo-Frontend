import { useState } from 'react';
import { FaSearch, FaShip, FaPlane, FaTruck, FaBoxOpen, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrackingPage = () => {

  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isSupportHovered, setIsSupportHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      // In a real application, you would fetch tracking data from an API
      // For demo purposes, we'll show tracking data for specific numbers
      // Otherwise show "No tracking found"
      
      // Example valid tracking numbers for demo
      const validTrackingNumbers = ['TNS123456', 'TNS987654', 'DEMO123', 'TEST456'];
      
      if (validTrackingNumbers.includes(trackingNumber.toUpperCase())) {
        // Simulate tracking data for valid numbers
        setTrackingData({
          number: trackingNumber,
          status: 'In Transit',
          origin: 'Mumbai, India',
          destination: 'New York, USA',
          estimatedDelivery: '2025-09-20',
          currentLocation: 'Dubai, UAE',
          shipDate: '2025-09-05',
          service: 'Express Air Freight',
          weight: '250 kg',
          pieces: '4',
          updates: [
            { date: '2025-09-11 08:30', location: 'Dubai, UAE', status: 'Arrived at transit facility', icon: <FaPlane /> },
            { date: '2025-09-08 14:45', location: 'Mumbai, India', status: 'Departed from origin', icon: <FaPlane /> },
            { date: '2025-09-07 09:15', location: 'Mumbai, India', status: 'Cleared customs', icon: <FaBoxOpen /> },
            { date: '2025-09-06 16:20', location: 'Mumbai, India', status: 'Processed at origin facility', icon: <FaBoxOpen /> },
            { date: '2025-09-05 10:00', location: 'Mumbai, India', status: 'Shipment picked up', icon: <FaTruck /> }
          ]
        });
      } else {
        // No tracking found for this number
        setTrackingData(null);
      }
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: '#1e40af', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Track Your Shipment</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto' }}>
            Enter your tracking number below to get real-time updates on your shipment status and location.
          </p>
        </div>
      </div>
      
      {/* Tracking Form */}
      <section style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            maxWidth: '48rem', 
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
            <form 
              onSubmit={handleSubmit} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '1rem'
              }}
              className="md-flex-row"
            >
              <input
                type="text"
                placeholder="Enter your tracking number"
                style={{ 
                  flexGrow: 1,
                  padding: '0.75rem 1rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  outline: 'none'
                }}
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
              />
              <button
                type="submit"
                style={{ 
                  padding: '0.75rem 1.5rem',
                  backgroundColor: isButtonHovered ? '#1d4ed8' : '#2563eb',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.15s ease-in-out'
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <FaSearch style={{ marginRight: '0.5rem' }} />
                Track Shipment
              </button>
            </form>
            
            {isSubmitted && !trackingData && (
              <div style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '0.375rem',
                textAlign: 'center'
              }}>
                <p style={{ color: '#dc2626', fontWeight: '600', fontSize: '1.125rem' }}>
                  No tracking found with this number
                </p>
                <p style={{ color: '#991b1b', marginTop: '0.5rem' }}>
                  Please check your tracking number and try again
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Tracking Results */}
      {isSubmitted && trackingData && (
        <section style={{ padding: '3rem 0' }}>
          <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
              {/* Shipment Summary */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                marginBottom: '2rem'
              }}>
                <div style={{ backgroundColor: '#2563eb', padding: '1rem', color: 'white' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Shipment #{trackingData.number}</h2>
                    <span style={{ 
                      padding: '0.25rem 1rem',
                      backgroundColor: '#22c55e',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      {trackingData.status}
                    </span>
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ 
                    display: 'grid',
                    gap: '1.5rem'
                  }} className="md-grid-cols-2">
                    <div>
                      <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#374151' }}>Shipment Details</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#6b7280' }}>Service:</span>
                          <span style={{ fontWeight: '500' }}>{trackingData.service}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#6b7280' }}>Weight:</span>
                          <span style={{ fontWeight: '500' }}>{trackingData.weight}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#6b7280' }}>Pieces:</span>
                          <span style={{ fontWeight: '500' }}>{trackingData.pieces}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#6b7280' }}>Ship Date:</span>
                          <span style={{ fontWeight: '500' }}>{trackingData.shipDate}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#6b7280' }}>Est. Delivery:</span>
                          <span style={{ fontWeight: '500' }}>{trackingData.estimatedDelivery}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#374151' }}>Route Information</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <div>
                          <span style={{ color: '#6b7280' }}>From:</span>
                          <div style={{ fontWeight: '500' }}>{trackingData.origin}</div>
                        </div>
                        <div>
                          <span style={{ color: '#6b7280' }}>To:</span>
                          <div style={{ fontWeight: '500' }}>{trackingData.destination}</div>
                        </div>
                        <div>
                          <span style={{ color: '#6b7280' }}>Current Location:</span>
                          <div style={{ fontWeight: '500' }}>{trackingData.currentLocation}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tracking Timeline */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                overflow: 'hidden'
              }}>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Shipment Progress</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {trackingData.updates.map((update, index) => (
                      <div key={index} style={{ position: 'relative', paddingLeft: '2rem' }}>
                        {index !== trackingData.updates.length - 1 && (
                          <div style={{ 
                            position: 'absolute',
                            top: '1.5rem',
                            bottom: 0,
                            left: '1rem',
                            width: '0.125rem',
                            backgroundColor: '#dbeafe'
                          }}></div>
                        )}
                        <div style={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '2rem',
                          height: '2rem',
                          backgroundColor: '#3b82f6',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          {update.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 'bold' }}>{update.status}</div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>{update.date}</div>
                          <div style={{ color: '#374151', marginTop: '0.25rem' }}>{update.location}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Tracking FAQ */}
      <section style={{ padding: '3rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#4b5563' }}>Find answers to common questions about tracking your shipment.</p>
          </div>
          
          <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>How often is my tracking information updated?</h3>
              <p style={{ color: '#4b5563' }}>
                Tracking information is typically updated several times throughout the shipment journey, 
                including when the package is picked up, processed at different facilities, clears customs, and is out for delivery.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>What if my tracking information hasn't updated for several days?</h3>
              <p style={{ color: '#4b5563' }}>
                Some shipments may experience delays in tracking updates, especially during customs clearance 
                or when transitioning between different transportation methods. If your tracking hasn't updated 
                for more than 3 business days, please contact our customer service team.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Can I track multiple shipments at once?</h3>
              <p style={{ color: '#4b5563' }}>
                For bulk tracking of multiple shipments, please contact our customer service team or 
                log in to your TNS Cargo India Services account where you can manage and track all your shipments.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>What do the different shipment statuses mean?</h3>
              <p style={{ color: '#4b5563' }}>
                Common shipment statuses include: "Shipment Picked Up" (collected from the sender), 
                "In Transit" (on the way to destination), "Customs Clearance" (being processed by customs), 
                "Out for Delivery" (on the final delivery vehicle), and "Delivered" (successfully delivered).
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Support */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Need Help With Your Shipment?</h2>
          <p style={{ 
            color: '#4b5563', 
            maxWidth: '42rem', 
            margin: '0 auto', 
            marginBottom: '1.5rem' 
          }}>
            Our customer service team is available to assist you with any questions or concerns regarding your shipment.
          </p>
          <Link 
            to="/contact" 
            style={{ 
              padding: '0.75rem 1.5rem',
              backgroundColor: isSupportHovered ? '#1d4ed8' : '#2563eb',
              color: 'white',
              fontWeight: '600',
              borderRadius: '0.375rem',
              display: 'inline-block',
              textDecoration: 'none',
              transition: 'background-color 0.15s ease-in-out'
            }}
            onMouseEnter={() => setIsSupportHovered(true)}
            onMouseLeave={() => setIsSupportHovered(false)}
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrackingPage;
