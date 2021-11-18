import { useEffect } from "react"
import { connect } from "react-redux";
import M from "materialize-css"

import { setCurentPlace } from "../../redux/actions/Place"
import fakeResImg from "../../assets/fakeres.jpg";
import "./placeDetails.css";
import Stars from "./Stars";
import CurrentPlace from "./CurrentPlace";

const PlaceDetails = ({ place, themap:{ childClicked},setCurentPlace, selected, ele, refProp }) => {

  useEffect(() => {
    M.AutoInit()
  }, [])


if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <CurrentPlace />

      {place && (
        <div className="row place-card" style={{ width: "100%" }}>
          <div className="col s12">
            <div className="card">
              <div className="card-image">
                <img
                  className="place-detail-card-img"
                  src={`${
                    place.photo ? place.photo.images.large.url : fakeResImg
                  }`}
                  title={place.name}
                  alt="place"
                />
                <span className="card-title place-card-title">
                  {place?.name}
                </span>
              </div>
              <div className="card-content">
                {
                  place.ranking ? (
                    <div className="wrap-card-items flex justify-between">
                      <div className="text-sm px-2">
                        <i className="material-icons">insert_chart</i>
                      </div>
                      <div className="text-xs">{place.ranking}</div>
                  </div>
                  )
                  :
                  ("")
                }
                {
                  place.rating ? (
                    <div className="wrap-card-items flex justify-between">
                      <div className="text-sm px-2">
                        <i className="material-icons">rate_review</i>
                      </div>
                      <div className="text-xs">
                        {<Stars val={place.rating} />}
                      </div>
                  </div>
                  )
                  :
                  ("")
                }
                <div className="wrap-card-items flex justify-between">
                  <div className="text-sm px-2">
                    <i className="material-icons location">location_on</i>
                  </div>
                  <div className="text-xs">{place.address}</div>
                </div>
                <div className="wrap-card-items flex justify-between">
                  <div className="text-sm px-2">
                    <i className="material-icons">phone</i>
                  </div>
                  <div className="text-xs">{place.phone}</div>
                </div>
                <div className="wrap-card-items flex justify-between">
                  <div className="text-sm px-2">
                    <i className="material-icons">attach_money</i>
                  </div>
                  <div className="text-xs">{place.price ? place.price : "Not Available" }</div>
                </div>
                {place?.cuisine?.length > 0 ?
                <ul className="place-foods">
                  {place?.cuisine?.map((cuis, i) => (
                      <li className="food-chip text-xs" key={i}>{cuis.name}</li>
                    ))}
                </ul>
                :
                ""
                }
              </div>
              <div className="card-action flex justify-between">
              <button onClick={() =>setCurentPlace(place)} data-target="currentplace" class="btn modal-trigger">More</button>
                <a href={`${place.web_url}`} class="hide-on-small-and-down waves-effect waves-light btn links">trip-advisor</a>
                {place.website && <a href={`${place.website}`} class="hide-on-small-and-down waves-effect waves-light btn links">website</a>}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const mapStateToProps = state =>({
  themap: state.themap
})
export default connect(mapStateToProps, {setCurentPlace})(PlaceDetails);
