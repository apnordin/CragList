import React from "react";
import GoogleMapReact from 'google-map-react';
import "./map.css"
import LocationPin from "../LocationPin/LocationPin"

const Map = ({location, zoomLevel}) => {

  const api_key = process.env.REACT_APP_API_KEY
  
  const locationNoAddress = {
    lat: location.lat,
    lng: location.lng
  }

  console.log(locationNoAddress)

    return(
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: api_key }}
            defaultCenter={locationNoAddress}
            defaultZoom={zoomLevel}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
}

export default Map;