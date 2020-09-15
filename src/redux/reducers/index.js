import { combineReducers } from "redux";
import cityDataReducer from "./city-data";
import expandedCardsReducer from "./expanded-card";

export default combineReducers({ cityDataReducer, expandedCardsReducer });