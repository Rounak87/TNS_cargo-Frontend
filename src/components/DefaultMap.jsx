const DefaultMap = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: '#f3f4f6',
      borderRadius: '0.5rem',
      overflow: 'hidden'
    }}>
      {/* Full-sized image of India Gate area */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/India_Gate_in_New_Delhi_03-2016.jpg/1920px-India_Gate_in_New_Delhi_03-2016.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9
      }} />

      {/* Overlay map elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}>
        {/* Location pin */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -100%)',
          pointerEvents: 'none'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50% 50% 50% 0',
            background: '#e11d48',
            transform: 'rotate(-45deg)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'white',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }} />
          </div>
          <div style={{
            width: '2px',
            height: '20px',
            background: 'rgba(0,0,0,0.2)',
            position: 'absolute',
            bottom: '-18px',
            left: '50%',
            transform: 'translateX(-50%)'
          }} />
        </div>

        {/* Map attribution */}
        <div style={{
          position: 'absolute',
          bottom: '0.5rem',
          right: '0.5rem',
          fontSize: '0.7rem',
          color: '#fff',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem'
        }}>
          Image: Wikimedia Commons
        </div>
      </div>

      {/* Map controls - for visual effect only */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <div style={{
          width: '40px',
          height: '80px',
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <button style={{
            width: '100%',
            height: '40px',
            border: 'none',
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            +
          </button>
          <button style={{
            width: '100%',
            height: '40px',
            border: 'none',
            backgroundColor: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultMap;
