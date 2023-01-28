import { Component } from "react";
import { GoogleApiWrapper, Marker } from "google-maps-react";
import dynamic from "next/dynamic";
import { API_KEY } from "@/config";
const Map = dynamic(() => import("google-maps-react"), { ssr: false });
class MapContainer extends Component {
  render() 
  {
    return (
    <div style={{position:'relative'}}>
      <Map
        google={this.props.google}
        style={{
          width: "40vw",
          height: "45vh",
          borderRadius: "18px",
          marginLeft: "15%",
        }}
        zoom={8}
        initialCenter={this.props.coords}
      >
        <Marker position={this.props.coords} />
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
