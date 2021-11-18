
import { useState, useEffect, createRef } from "react"
import { connect } from "react-redux"
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import { getPlaces, filterPlaces, getWeather , setLoading} from "../../redux/actions/Place"

import "./list.css"

const List = ({place:{ places, filteredPlaces, loading},themap:{bounds, coordinates, childCliked},setLoading, getPlaces, getWeather, filterPlaces}) => {
    const [type, setType ] = useState("restaurants")
    const [rating, setRating ] = useState("")
    const [elRefs, setElRefs] = useState([])

    useEffect(() => {
        if(rating){
            filterPlaces(rating)
        }
        // eslint-disable-next-line
    }, [rating])


    useEffect(() => {
        const getAll = async ()=>{
            if(bounds?.ne && bounds?.sw){
                await setLoading()
                await getWeather(coordinates)
                await getPlaces(type, bounds?.ne, bounds?.sw)
            } 
        }

        getAll()
        
        // eslint-disable-next-line
    }, [type, bounds, coordinates])


    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
        
    }, [places])
    return (
        <div>
            <div className="row">
                <div className="input-field col s6">
                    <select value={type} onChange={e => setType(e.target.value)}>
                    <option value="restaurants">Restaurants</option>
                    <option value="hotels">Hotels</option>
                    <option value="attractions">Places</option>
                    </select>
                    <label className="text-xs mb-4">Select Type</label>
                </div>
                <div className="input-field col s6">
                <select value={rating} onChange={e => setRating(e.target.value)}>
                    <option value={0}>All</option>
                    <option value={2.5}>Over 2.5</option>
                    <option value={3.5}>Over 3.5</option>
                    <option value={4.5}>Over 4.5</option>
                    </select>
                    <label className="text-xs mb-4">Select Rating</label>
                </div>
            </div>
            <div className="list-container">
                {
                    !loading ?
                    (
                        
                        filteredPlaces?.length > 0 ? 
                        (filteredPlaces.map((place, i)=>{
                            return <PlaceDetails key={i} 
                            place={place} 
                            selected={ i === Number(childCliked) ? true : false}
                            ele={i}
                            refProp={elRefs[i]}
                            />
                        }))
                        :
                        places?.length > 0 ? 
                            (places.map((place, i)=>{
                                return <PlaceDetails key={i} 
                                place={place} 
                                selected={ i === Number(childCliked) ? true : false}
                                ele={i}
                                refProp={elRefs[i]}
                                />
                            }))
                        :
                        (
                            <div className="text-center">No data Found</div>
                        )
                    )
                    :
                    (
                    <div className="progress my-16">
                        <div className="indeterminate"></div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    place: state.place,
    themap: state.themap
})
export default connect(mapStateToProps,{setLoading, getPlaces,filterPlaces, getWeather})(List)
