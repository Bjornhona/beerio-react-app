import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import './map.css';

const Map = ({locations, setSelectedBrewery}) => {
  const defaultProps = {
    center: {
      lat: 39.5,
      lng: -98.35
    },
    zoom: 4.5
  };

  const Marker = ({location}) => {
    return (
      <div className="tooltip" onClick={() => setSelectedBrewery(location)}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-pin"/>
        <h6><span className="tooltiptext">{location.name}</span></h6>
      </div>
    )
  };

  return (
    <div className='google-map' style={{ height: '430px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBymtz6Tua6L_x82tyrNFMNM_BEzMcnfYY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      {locations.map(location => {
        return (
            <Marker
              lat={location.latitude}
              lng={location.longitude}
              key={location.id}
              location={location}
            />
        )
      })}
      </GoogleMapReact>
    </div>
  )
}

export default Map;