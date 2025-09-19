const MapLoadingIndicator = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100%',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{ 
        border: '4px solid #f3f4f6',
        borderTopColor: '#2563eb',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite',
        marginBottom: '1rem'
      }}></div>
      <p style={{ color: '#4b5563' }}>Loading map...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MapLoadingIndicator;
