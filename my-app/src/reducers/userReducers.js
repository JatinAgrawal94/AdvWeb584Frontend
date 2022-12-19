import {USER_CREATE_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_SIGNIN_FAIL,USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNOUT} from "../constants/userConstants";

export const userSigninReducer=(state={loading:true},action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true};
        
        case USER_SIGNIN_SUCCESS:
            return {loading:false,userInfo:action.payload};
        
        case USER_SIGNIN_FAIL:
            return {loading:false,error:action.payload};
       
        case USER_SIGNOUT:
            return {};
            
        default:return state;
    }
}


export const userCreateReducer=(state={loading:true},action)=>{
    switch(action.type){
        case USER_CREATE_REQUEST:
            return {loading:true};
        
        case USER_CREATE_SUCCESS:
            return {loading:false,userInfo:action.payload};
        
        case USER_CREATE_FAIL:
            return {loading:false,error:action.payload};
       
        default:return state;
    }
}