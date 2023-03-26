import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Box, Icon } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

function Map({
  mapState,
  onMarkerInteraction,
  onMarkerInteractionMouseUp,
  _onChange,
  _onClick,
  apiHasLoaded,
}: any) {
  const Marker = ({ text }: any) => <div><Icon as={MdLocationOn} color="primary" boxSize={8}/>
  <p style={{display:"none"}}>{text}</p></div>;
  const { center, zoom, draggable, lat, lng, address } = mapState;
  const defaultCenter= {
    lat: 6.4541,
    lng: 3.3947
  }
  return (
    <Box w="100%" h={{base:"70vh", md:"100%"}} mb={{base:10, md:0}}>
      <GoogleMapReact
        defaultCenter={defaultCenter}
        center={center}
        zoom={zoom}
        draggable={draggable}
        onChange={_onChange}
        onChildMouseDown={onMarkerInteraction}
        onChildMouseUp={onMarkerInteractionMouseUp}
        onChildMouseMove={onMarkerInteraction}
        onChildClick={() => console.log("child click")}
        onClick={_onClick}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KEY || "",
          libraries: ["places", "geometry"],
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        <Marker
          lat={lat}
          lng={lng}
          text={address}
        />
      </GoogleMapReact>
    </Box>
  );
}

export default Map;
