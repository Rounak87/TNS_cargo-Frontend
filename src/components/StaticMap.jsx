const StaticMap = ({ address }) => {
  // For demo purposes, we'll use a static image of India Gate
  // In a real application, you could use a static map service or an image of the location
  
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f4f6',
      padding: '1rem',
      borderRadius: '0.5rem',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/India_Gate_Independence_day.jpg/800px-India_Gate_Independence_day.jpg" 
          alt={`Map of ${address || 'location'}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '15rem',
            borderRadius: '0.375rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}
        />
      </div>
      <p style={{ fontWeight: 'bold' }}>{address || 'India Gate, New Delhi'}</p>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
        To enable interactive maps, please add a valid Google Maps API key to your .env file
      </p>
    </div>
  );
};

export default StaticMap;
