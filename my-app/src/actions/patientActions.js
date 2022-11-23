import Axios from 'axios';
import {PATIENT_LIST_REQUEST,PATIENT_LIST_SUCCESS,PATIENT_LIST_FAIL} from '../constants/patientConstants';

export const getPatients=()=>async(dispatch,getState)=>{
    dispatch({type: PATIENT_LIST_REQUEST,payload:{}});
    try{
        var {data}=await Axios.get(`https://localhost:7204/api/Patient`);
        dispatch({type: PATIENT_LIST_SUCCESS,payload:data});
    }catch(error){
        dispatch({type: PATIENT_LIST_FAIL,payload:error.message});
    }
}