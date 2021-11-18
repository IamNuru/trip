import { combineReducers } from "redux";
import Place from "./Place"
import TheMap from "./TheMap"


export default combineReducers({
    place : Place,
    themap : TheMap,
})