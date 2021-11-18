import { SET_BOUNDS, SET_CHILD_CLICKED, SET_COORDINATES } from "../actions/types"

const initialState = {
    childClicked: null,
    coordinates:null,
    bounds:null

}

// eslint-disable-next-line
export default (state = initialState, action) => {
switch (action.type) {
    case SET_COORDINATES:
        return{
            ...state,
            coordinates: action.payload,
        }

    case SET_BOUNDS:
        return{
            ...state,
            bounds: action.payload,
        }
        
    case SET_CHILD_CLICKED:
        return{
            ...state,
            childClicked: action.payload
        }

    default:
        return state
}

}