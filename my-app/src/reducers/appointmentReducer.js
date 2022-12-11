import {APPOINTMENT_LIST_REQUEST,APPOINTMENT_LIST_SUCCESS,APPOINTMENT_LIST_FAIL,APPOINTMENT_CREATE_REQUEST,APPOINTMENT_CREATE_SUCCESS,APPOINTMENT_CREATE_FAIL,APPOINTMENT_UPDATE_REQUEST,APPOINTMENT_UPDATE_SUCCESS,APPOINTMENT_UPDATE_FAIL,APPOINTMENT_DELETE_REQUEST,APPOINTMENT_DELETE_SUCCESS,APPOINTMENT_DELETE_FAIL} from '../constants/appointmentConstants';

// appointment creater, delete,view all, view specific,update
// add,delete,update,read

export const appointmentCreateReducer=(state={},action)=>{
    switch(action.type){
        case APPOINTMENT_CREATE_REQUEST:
            return {loading:true};
        case APPOINTMENT_CREATE_SUCCESS:
            return {loading:false,success:true};
        case APPOINTMENT_CREATE_FAIL:
            return {loading:false,error:action.payload};
        default: return state;
    }
}   

export const appointmentUpdateReducer=(state={},action)=>{
    switch(action.type){
        case APPOINTMENT_UPDATE_REQUEST:
            return {loading:true};
        case APPOINTMENT_UPDATE_SUCCESS:
            return {loading:false,success:true};
        case APPOINTMENT_UPDATE_FAIL:
            return {loading:false,error:action.payload};
        default: return state;
    }
}

export const appointmentReadReducer=(state={loading:true,appointments:[]},action)=>{
    switch(action.type){
        case APPOINTMENT_LIST_REQUEST:
            return {loading:true};
        case APPOINTMENT_LIST_SUCCESS:
            return {
                loading:false,
                appointments:action.payload
            };
        case APPOINTMENT_LIST_FAIL:
            return {
                loading:false,
                payload:action.payload
            };
        default:return state;
    }
}

export const appointmentDeleteReducer=(state={},action)=>{
    switch(action.type){
        case APPOINTMENT_DELETE_REQUEST:
            return {loading:true};
        case APPOINTMENT_DELETE_SUCCESS:
            return {loading:false,success:true};
        case APPOINTMENT_DELETE_FAIL:
            return {loading:false,error:action.payload};
        default: return state;
    }
}