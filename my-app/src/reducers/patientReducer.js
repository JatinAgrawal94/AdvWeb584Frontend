
import {PATIENT_LIST_REQUEST,PATIENT_LIST_SUCCESS,PATIENT_LIST_FAIL} from '../constants/patientConstants';

export const patientReducer=(state={loading:true,patients:[]},action)=>{
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