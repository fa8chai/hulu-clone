import { GET_DATA, GET_DATA_ERROR, CHANGE_OPTION } from "./action-types";
import requests from '../requests'; 

const initialState={
    movies:[],
    option: requests.fetchTrending,
    error:'',
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                movies: action.payload,
                error: ''
            };
        case GET_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CHANGE_OPTION:
            return {
                ...state,
                option: action.payload
            }
        default:
            return state
    }
};

export default reducer;