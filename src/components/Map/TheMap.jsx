import { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import {
  setCoordinates,
  setBounds,
  setChildClicked,
} from "../../redux/actions/TheMap";

import "./mapStyle.css"
import mapStyle from "./mapStyle"

import MarkerContainer from "./MarkerContainer";
const TheMap = ({ themap: { coordinates, bounds }, place: { places, filteredPlaces, weather }, setCoordinates, setBounds, setChildClicked,}) => {


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates(latitude, longitude);
      }
    );

    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC2Svm5V3x3n8C03ySFkHrV0gAt6li2iUs" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{disableDefaultUI:true, zoomControl:true, styles:mapStyle}}
        onChange={(e) => {
          setCoordinates(e.center.lat, e.center.lng);
          setBounds(e.marginBounds.ne, e.marginBounds.sw);
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {
        filteredPlaces?.length > 0 ?
        filteredPlaces?.map((pl, i) => (
          <MarkerContainer
            key={i}
            lat={Number(pl.latitude)}
            lng={Number(pl.longitude)}
            pl={pl}
          />
        ))
        :
        places?.map((pl, i) => (
          <MarkerContainer
            key={i}
            lat={Number(pl.latitude)}
            lng={Number(pl.longitude)}
            pl={pl}
          />
        ))
        }
        {
          weather?.list?.map((wea, i)=>{
            console.log(wea)
            return <div key={i} className="weather">
              <img className="weather-image" src={`https://openweathermap.org/img/w/${wea.weather[0].icon}.png`} alt="weather" />
              <div className="weather-desc">{wea.weather[0].main}</div>
            </div>
          })
        }
      </GoogleMapReact>
    </div>
  );
};




const mapStateToProps = (state) => ({
  themap: state.themap,
  place: state.place,
});


export default connect(mapStateToProps, {
  setCoordinates,
  setBounds,
  setChildClicked,
})(TheMap);
