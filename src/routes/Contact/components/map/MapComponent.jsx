import React from 'react';
import { withGoogleMap } from 'react-google-maps';

export const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={ props.onMapLoad }
    defaultZoom={ 8 }
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        { ...marker }
      />
    ))}
  </GoogleMap>
));

export default GettingStartedGoogleMap;
