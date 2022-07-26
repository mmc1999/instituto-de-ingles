import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Mapa = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    
  return (
    <>
    {/*<div  style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCd2XAyRgktrQE1K7UzFxVFn85PHSRpwTI" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
  </div>*/}</>
  )
}

export default Mapa