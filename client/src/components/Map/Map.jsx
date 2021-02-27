import React from "react";
import GoogleMapReact from 'google-map-react';
import "./map.css"
import LocationPin from "../LocationPin/LocationPin"

const Map = ({location, zoomLevel}) => {

  
  const locationNoAddress = {
    lat: location.lat,
    lng: location.lng
  }

  console.log(locationNoAddress)

    return(
      <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCWTc_rhOAdR2t6Gmt6DJ3kBU6sz8fKGvs' }}
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