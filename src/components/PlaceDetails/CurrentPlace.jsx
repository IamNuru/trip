import { connect } from "react-redux";
import fakeResImg from "../../assets/fakeres.jpg";
import Stars from "./Stars"
import "./current.css"

const CurrentPlace = ({ place: { current, loading } }) => {
  return (
    <div id="currentplace" class="modal">
      {!loading ? (
          current !== null ?
        (<div className="row current-card m-auto" style={{ width: "100%", margin:"auto" }}>
          <h4 className="s12 text-center">{current.name}</h4>
          <div className="col s12">
            <div className="card mb-12">
              <div className="card-image">
                <div className="block">
                <img
                  className="current-img"
                  src={`${
                    current.photo ? current.photo.images.large.url : fakeResImg
                  }`}
                  title={current.name}
                  alt="current"
                />
                <span className="card-title current-card-title">
                  {current?.name}
                </span>
              </div>
              <p className="text-xs text-center">{current.photo?.caption ? current.photo.caption : "No caption available"}</p>
              </div>
              <div className="card-content">
                {
                  current.ranking ? (
                    <div className="wrap-card-items flex justify-between">
                      <div className="text-sm px-2">
                        <i className="material-icons">insert_chart</i>
                      </div>
                      <div className="text-xs">{current.ranking}</div>
                  </div>
                  )
                  :
                  ("")
                }
                {
                  current.rating ? (
                    <div className="wrap-card-items flex justify-between">
                      <div className="text-sm px-2">
                        <i className="material-icons">rate_review</i>
                      </div>
                      <div className="text-xs">
                        {<Stars val={current.rating} />}{"  "} <span className="hide-on-small-and-down">out of {current.num_reviews} reviews</span>
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
                  <div className="text-xs">{current.address}</div>
                </div>
                <div className="wrap-card-items flex justify-between">
                  <div className="text-sm px-2">
                    <i className="material-icons">phone</i>
                  </div>
                  <div className="text-xs">{current.phone}</div>
                </div>
                <div className="wrap-card-items flex justify-between">
                  <div className="text-sm px-2">
                    <i className="material-icons">attach_money</i>
                  </div>
                  <div className="text-xs">{current.price ? current.price : "Not Available" }</div>
                </div>
                {current?.cuisine?.length > 0 ?
                <div className="wrap-card-items">
                <div className="text-sm"><span className="font-weight-600">Cuisines</span> (<i>Foods prepare here</i>)</div>
                  <ul className="place-foods">
                    {current?.cuisine?.map((cuis, i) => (
                        <li className="food-chip text-xs" key={i}>{cuis.name}</li>
                      ))}
                  </ul>
                </div>
                :
                ""
                }
                {current?.awards?.length > 0 ?
                <div className="wrap-card-items">
                <div className="text-sm font-weight-600">Awards</div>
                <div className="place-foods">
                  {current?.awards?.map((award, i) => (
                    <div className="award-chip text-xs" key={i}>
                        <img src={`${award.images?.small}`} alt="award image" className="award-image" />
                        -
                        <span className="award-type">{award.award_type ? award.award_type : "-"}</span>
                        - 
                        <span className="award-year">{award.year ? award.year : "-"}</span>
                        
                      </div>
                    ))}
                </div>
                </div>
                :
                ""
                }
                <div className="wrap-card-items flex justify-between">
                  <div className="text-sm px-2">
                    <span className="font-weight-600">Status</span>
                  </div>
                  <div className="text-xs">{current.open_now_text ? current.open_now_text : "No information"}</div>
                </div>
                <ul class="collapsible wrap-card-items">
                  <li className="active">
                    <div class="collapsible-header font-weight-600"><i class="material-icons">description</i>Description</div>
                    <div class="collapsible-body"><span>{current.description ? current.description : "Nothing Available Yet"}</span></div>
                  </li>
                  <li>
                    <div class="collapsible-header font-weight-600"><i class="material-icons">place</i>Complete Address</div>
                    <div class="collapsible-body">
                      <div className="flex complete-address-item">
                        <span className="text-sm font-weight-600" style={{paddingRight:"3px"}}>Nearest Metro Stations:</span>
                        <ul>
                          <li>{current.nearest_metro_station?.length ? current.nearest_metro_station : "Nothing Available Yet "}</li>
                        </ul>
                      </div>
                      
                      <div className="flex complete-address-item">
                        <span className="text-sm font-weight-600" style={{paddingRight:"3px"}}>Email:</span>
                        <span>{current.email ? current.email : "Not Available"}</span>
                      </div>
                      
                      <div className="flex complete-address-item">
                        <span className="text-sm font-weight-600" style={{paddingRight:"3px"}}>Postal Code:</span>
                        <span>{current.address_obj?.postalcode ? current.address_obj.postalcode : "Not Available"}</span>
                      </div>

                      <div className="flex complete-address-item">
                        <span className="text-sm font-weight-600" style={{paddingRight:"3px"}}>street:</span>
                        <span>
                          {
                          current.address_obj?.street1 ?
                            current.address_obj.street1 :
                              current.address_obj?.street2 ?
                                current.address_obj.street2 :
                                   "Not Available"
                          }
                          </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header font-weight-600"><i class="material-icons">cloud</i>weather</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                  </li>
                </ul>
              </div>
              <div className="card-action flex justify-between mt-12">
              <a href={`${current.web_url}`} class="waves-effect waves-light btn links">trip-advisor</a>
              {current.website && <a href={`${current.website}`} class="waves-effect waves-light btn links">website</a>}

              </div>
            </div>
          </div>
        </div>
        )
        :
        <div className="text-center">No Data Found</div>
      )
        :
    (
        <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    )
    }
    </div>
  );
};



const mapStateToProps = (state) => ({
  place: state.place,
});

export default connect(mapStateToProps, {})(CurrentPlace);
