import {PATIENT_LIST_REQUEST,PATIENT_LIST_SUCCESS,PATIENT_LIST_FAIL,PATIENT_REQUEST,PATIENT_SUCCESS,PATIENT_FAIL, PATIENT_PROFILE_UPDATE_REQUEST, PATIENT_PROFILE_UPDATE_SUCCESS, PATIENT_PROFILE_UPDATE_FAILED,PATIENT_DELETE_REQUEST, PATIENT_DELETE_SUCCESS, PATIENT_DELETE_FAIL, PATIENT_CREATE_REQUEST, PATIENT_CREATE_SUCCESS, PATIENT_CREATE_FAIL} from '../constants/patientConstants';

export const patientListReducer=(state={loading:true,patients:[]},action)=>{
    switch(action.type){
        case PATIENT_LIST_REQUEST:
            return {loading:true};
        case PATIENT_LIST_SUCCESS:
            return {
                loading:false,
                patients:action.payload
            };
        case PATIENT_LIST_FAIL:
            return {
                loading:false,
                payload:action.payload
            };
        default:return state;
    }
}

export const patientReducer=(state={loading:true,patient:{}},action)=>{
    switch(action.type){
        case PATIENT_REQUEST:
            return {loading:true};
        case PATIENT_SUCCESS:
            return {
                loading:false,
                patient:action.payload
            };
        case PATIENT_FAIL:
            return {
                loading:false,
                payload:action.payload
            };
        default:return state;
    }
}

export const patientDataUpdateReducer=(state={},action)=>{
    switch(action.type){
        case PATIENT_PROFILE_UPDATE_REQUEST:
            return {loading:true};
        case PATIENT_PROFILE_UPDATE_SUCCESS:
            return {loading:false,success:true};
        case PATIENT_PROFILE_UPDATE_FAILED:
            return {loading:false,error:action.payload};
        default: return state;
    }
}

export const patientCreateReducer=(state={},action)=>{
    switch(action.type){
        case PATIENT_CREATE_REQUEST:
            return {loading:true};
        case PATIENT_CREATE_SUCCESS:
            return {loading:false,success:true};
        case PATIENT_CREATE_FAIL:
            return {loading:false,error:action.payload};
        default: return state;
    }
}

export const patientDeleteReducer=(state={},action)=>{
    switch(action.type){
        case PATIENT_DELETE_REQUEST:
            return {loading:true};
        case PATIENT_DELETE_SUCCESS:
            return {loading:false,success:true};
        case PATIENT_DELETE_FAIL:
            return {loading:false,error:action.payload};
        default: return state;
    }
}
