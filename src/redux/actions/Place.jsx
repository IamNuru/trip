import axios from "axios";
import { GET_PLACES, PLACE_ERRORS, SET_LOADING, FILTER_PLACES, GET_WEATHER, WEATHER_ERRORS, SET_CURRENT_PLACE} from "./types";


export const getPlaces =(type, ne, sw) => async dispatch=>{
    setLoading()
    await axios.get(`${process.env.REACT_APP_TRAVEL_ADVISOR_URL}${type}/list-in-boundary`, 
    {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.REACT_APP_RAPID_API_SECRETE_KEY}`
          }
        }
    )
    .then(res =>{
        dispatch({
           type: GET_PLACES,
           payload: res.data
        })
    }).catch(err =>{
        console.log(err.response.data)
        dispatch({
            type: PLACE_ERRORS,
         })
    })
    
}
export const getWeather=({lat, lng}) => async dispatch=>{

    await axios.get(`https://community-open-weather-map.p.rapidapi.com/find`, 
    {
        params: {
            lon: lng,
            lat: lat,

          },
          headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.REACT_APP_RAPID_API_SECRETE_KEY}`
          }
        }
    )
    .then(res =>{
        dispatch({
           type: GET_WEATHER,
           payload: res.data
        })
    }).catch(err =>{
        dispatch({
            type: WEATHER_ERRORS,
         })
    })
    
}


export const filterPlaces = (filter) => async dispatch=>{
    console.log(filter)
    dispatch({
        type:FILTER_PLACES,
        payload:filter
    })
}


export const setCurentPlace = (place) => dispatch =>{
    setLoading()
    dispatch({
        type: SET_CURRENT_PLACE,
        payload: place
    })
}


export const setLoading = () =>{
    return{
        type: SET_LOADING,
    }
}
