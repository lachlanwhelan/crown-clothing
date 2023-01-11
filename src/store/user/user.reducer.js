import {USER_ACTION_TYPES} from './user.types';
/* 
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
} */

const INITIAL_STATE = {
    currentUser: null
}

//IMPORTANT NOTE - each reducer recieves every single action dispatched ever
//so need to return state by default. This is different to context useReducer.
//context actions are only passed to their specific reducer.
export const userReducer = (state=INITIAL_STATE , action) => {

    const {type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}