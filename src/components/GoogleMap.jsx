import { useEffect, useRef, useState } from 'react';
import MapLoadingIndicator from './MapLoadingIndicator';
import StaticMap from './StaticMap';

const GoogleMap = ({ address, zoom = 15 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Function to load the Google Maps script
    const loadGoogleMapsScript = () => {
      if (window.google && window.google.maps) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      
      // For development purposes, we can use a mapless approach if no API key is available
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=Function.prototype`;
      script.async = true;
      script.defer = true;
      
      if (!apiKey) {
        console.warn('No Google Maps API key provided. Using fallback static map.');
        setIsLoading(false);
        setHasError(true);
        return;
      }
      
      script.onload = initMap;
      script.onerror = () => {
        setIsLoading(false);
        setHasError(true);
        console.error('Failed to load Google Maps API');
      };
      document.head.appendChild(script);
    };

    // Initialize the map
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const geocoder = new window.google.maps.Geocoder();
      setIsLoading(false);
      
      // Default location (India Gate, New Delhi)
      const defaultLocation = { lat: 28.6129, lng: 77.2295 };

      // Create the map instance
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        zoom: zoom,
        center: defaultLocation,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
      });

      // If address is provided, geocode it and center the map on it
      if (address) {
        geocoder.geocode({ address: address }, (results, status) => {
          if (status === 'OK' && results && results.length > 0) {
            const location = results[0].geometry.location;
            mapInstanceRef.current.setCenter(location);
            
            // Add a marker
            new window.google.maps.Marker({
              map: mapInstanceRef.current,
              position: location,
              animation: window.google.maps.Animation.DROP
            });
          } else {
            // Fallback to default location if geocoding fails
            console.warn('Geocoding failed for address:', address);
            
            // Add a marker at the default location
            new window.google.maps.Marker({
              map: mapInstanceRef.current,
              position: defaultLocation,
              animation: window.google.maps.Animation.DROP
            });
          }
        });
      } else {
        // Add a marker at the default location
        new window.google.maps.Marker({
          map: mapInstanceRef.current,
          position: defaultLocation,
          animation: window.google.maps.Animation.DROP
        });
      }
    };

    loadGoogleMapsScript();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        // Cleanup if needed
      }
    };
  }, [address, zoom]);

  return (
    <>
      {isLoading && <MapLoadingIndicator />}
      {hasError && (
        <StaticMap address={address} />
      )}
      <div 
        ref={mapRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '0.5rem',
          display: (!isLoading && !hasError) ? 'block' : 'none'
        }}
      ></div>
    </>
  );
};

export default GoogleMap;
