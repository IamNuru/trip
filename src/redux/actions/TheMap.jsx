import { GET_BOUNDS, GET_COORDINATES, SET_COORDINATES, SET_BOUNDS, SET_LOADING, SET_CHILD_CLICKED} from "./types";


export const setCoordinates =(latitude, longitude) =>{
    let data = {
        lat: latitude,
        lng: longitude
    }

    return{
        type: SET_COORDINATES,
        payload: data
    }
}




export const getCoordinates =()=>{
    return{
        type: GET_COORDINATES,
    }
}


export const setBounds =(ne, sw) =>{
    let data = {
        ne: ne,
        sw: sw
    }
    return{
        type: SET_BOUNDS,
        payload: data
    }
}
export const getBounds =()=>{
    return{
        type: GET_BOUNDS,
    }
}


export const setChildClicked = (child) =>{
    return{
        type: SET_CHILD_CLICKED,
        payload:child
    }
}

export const setLoading = () =>{
    return{
        type: SET_LOADING,
    }
}
