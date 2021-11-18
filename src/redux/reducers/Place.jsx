import { GET_PLACES, SET_LOADING, FILTER_PLACES, GET_WEATHER,PLACE_ERRORS, SET_CURRENT_PLACE } from "../actions/types"

const initialState = {
    places:null,
    filteredPlaces:null,
    loading:true,
    current:null,
    weather:null,
    errors:null,
}

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch(action.type){

        case GET_PLACES:
            return{
                ...state,
                places: action.payload.data?.filter(place => place.name && place.num_reviews > 0),
                filteredPlaces:null,
                loading:false
            }

        case FILTER_PLACES:
            return{
                ...state,
                filteredPlaces: state.places?.filter(place => place.rating >= action.payload),
                loading: false
            }

        case SET_LOADING:
            return{
                ...state,
                loading:true
            }

        case GET_WEATHER:
            return{
                ...state,
                weather: action.payload,
                loading: false

            }

        case SET_CURRENT_PLACE:
            return{
                ...state,
                current: action.payload,
                loading: false
            }

        case PLACE_ERRORS:
            return{
                ...state,
                errors:"Something went wrong. Please refresh!!!",
                loading:false,
            }


        default:
            return state
    }
}