import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsSubmitted(true);
      // In a real application, you would make an API call here
    }
  };

  return (
    <section style={{
      padding: '4rem 0',
      backgroundColor: '#1e40af',
      color: 'white'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Track Your Shipment</h2>
          <p style={{ maxWidth: '42rem', margin: '0 auto' }}>
            Enter your tracking number below to get real-time updates on your shipment status and location.
          </p>
        </div>

        <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
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
              placeholder="Enter tracking number"
              style={{ 
                flexGrow: 1, 
                padding: '0.75rem 1rem',
                borderRadius: '0.375rem',
                color: '#333',
                border: 'none',
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
                backgroundColor: isHovered ? '#facc15' : '#eab308',
                color: 'black',
                fontWeight: '600',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease-in-out'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaSearch style={{ marginRight: '0.5rem' }} />
              Track
            </button>
          </form>

          {isSubmitted && (
            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              backgroundColor: '#1d4ed8', 
              borderRadius: '0.375rem' 
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Tracking Information</h3>
              <p style={{ marginBottom: '0.5rem' }}>
                This is a placeholder for tracking information. In a real implementation, 
                this would display actual tracking data from your backend system.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#93c5fd' }}>
                Tracking Number: {trackingNumber}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
