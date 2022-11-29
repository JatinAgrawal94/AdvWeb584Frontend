import {DOCTOR_LIST_REQUEST,DOCTOR_LIST_SUCCESS,DOCTOR_LIST_FAIL,DOCTOR_REQUEST,DOCTOR_SUCCESS,DOCTOR_FAIL, DOCTOR_PROFILE_UPDATE_REQUEST, DOCTOR_PROFILE_UPDATE_SUCCESS, DOCTOR_PROFILE_UPDATE_FAILED,DOCTOR_DELETE_REQUEST, DOCTOR_DELETE_SUCCESS, DOCTOR_DELETE_FAIL, DOCTOR_CREATE_REQUEST, DOCTOR_CREATE_SUCCESS, DOCTOR_CREATE_FAIL} from '../constants/doctorConstants';

export const doctorListReducer=(state={loading:true,Doctors:[]},action)=>{
    switch(action.type){
        case DOCTOR_LIST_REQUEST:
            return {loading:true};
        case DOCTOR_LIST_SUCCESS:
            return {
                loading:false,
                doctors:action.payload
            };
        case DOCTOR_LIST_FAIL:
            return {
                loading:false,
                payload:action.payload
            };
        default:return state;
    }
}

export const doctorReducer=(state={loading:true,Doctor:{}},action)=>{
    switch(action.type){
        case DOCTOR_REQUEST:
            return {loading:true};
        case DOCTOR_SUCCESS:
            return {
                loading:false,
                doctor:action.payload
            };
        case DOCTOR_FAIL:
            return {
                loading:false,
                payload:action.payload
            };
        default:return state;
    }
}

export const doctorDataUpdateReducer=(state={},action)=>{
    switch(action.type){
        case DOCTOR_PROFILE_UPDATE_REQUEST:
            return {loading:true};
        case DOCTOR_PROFILE_UPDATE_SUCCESS:
            return {loading:false,success:true};
        case DOCTOR_PROFILE_UPDATE_FAILED:
            return {loading:false,error:action.payload};
        default: return state;
    }
}

export const doctorCreateReducer=(state={},action)=>{
    switch(action.type){
        case DOCTOR_CREATE_REQUEST:
            return {loading:true};
        case DOCTOR_CREATE_SUCCESS:
            return {loading:false,success:true};
        case DOCTOR_CREATE_FAIL:
            return {loading:false,error:action.payload};
        default: return state;
    }
}

export const doctorDeleteReducer=(state={},action)=>{
    switch(action.type){
        case DOCTOR_DELETE_REQUEST:
            return {loading:true};
        case DOCTOR_DELETE_SUCCESS:
            return {loading:false,success:true};
        case DOCTOR_DELETE_FAIL:
            return {loading:false,error:action.payload};
        default: return state;
    }
}
