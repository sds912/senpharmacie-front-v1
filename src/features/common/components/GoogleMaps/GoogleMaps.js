import React, { useCallback, useState } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const GoogleMaps = (props) => {
	const {pharmacie, zoom} = props;
	
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCXrymOPbIN5SZu5QrsqlKzMp_5Ac7UjAY"
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({ 
		lat: pharmacie.latitude,
		lng: pharmacie.longitude});
    map.fitBounds(bounds);
	  map.setZoom(zoom);
	
    setMap(map);
  }, [pharmacie.latitude, pharmacie.longitude, zoom]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
		lat: pharmacie.latitude,
		lng: pharmacie.longitude 
	  }}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
	  {pharmacie !== null ? <MarkerF position={{ lat: pharmacie.latitude, lng: pharmacie.longitude}} title={pharmacie.nom} /> : null}

    </GoogleMap>
  ) : (
    <div>Loading Google Maps...</div>
  );
};

export default React.memo(GoogleMaps);
 