import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { connect } from "react-redux";

import { setCoordinates } from "../../redux/actions/TheMap"


import "./header.css"

const Header = ({setCoordinates}) => {
  const [autoComplete, setAutoComplete] = useState(null)

 const onLoad = (autoC) => setAutoComplete(autoC)

 const onPlaceChanged = () =>{
   const lat = autoComplete.getPlace().geometry.location.lat();
   const lng = autoComplete.getPlace().geometry.location.lng();

   setCoordinates(lat, lng)
 }
  return (
    <nav className="mb-8">
      <div className="nav-wrapper row blue">
        <div className="col s12 m6">
          <div className="header-app-name">Trip Advisor</div>
        </div>

        <div className="col s12 m6">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="input-field header-input">
              <input id="search" type="search" style={autoCompleteStyle} required />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </Autocomplete>
        </div>

      </div>
    </nav>
  );
};


const autoCompleteStyle = {
  height:"2.2rem",
  display:"initial",
  borderRadius:"2rem",
  
}


export default connect(null, {setCoordinates})(Header);
