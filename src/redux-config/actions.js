import { GET_DATA, GET_DATA_ERROR, CHANGE_OPTION } from './action-types';
import axios from '../axios';
import requests from '../requests';


export const getData = (option) => {
    return async (dispatch) => {
        try{
            const response = await axios.get(option)
            dispatch({type: GET_DATA, payload: response.data.results})
        }
        catch(error) {
            dispatch({type: GET_DATA_ERROR, payload: error});
        }
        return 'done';
    }
};

export const changeOption = (option) => {
    return{
        type: CHANGE_OPTION,
        payload: option
    }
}