import Axios from 'axios';
import {PATIENT_LIST_REQUEST,PATIENT_LIST_SUCCESS,PATIENT_LIST_FAIL,PATIENT_REQUEST,PATIENT_SUCCESS,PATIENT_FAIL} from '../constants/patientConstants';

export const getPatients=()=>async(dispatch,getState)=>{
    dispatch({type: PATIENT_LIST_REQUEST,payload:{}});
    try{
        var {data}=await Axios.get(`https://localhost:7204/api/Patient`);
        dispatch({type: PATIENT_LIST_SUCCESS,payload:data});
        localStorage.setItem('patients',JSON.stringify(getState().patientList.patients));
    }catch(error){
        dispatch({type: PATIENT_LIST_FAIL,payload:error.message});
    }
}

export const getSpecificPatient=(id)=>async(dispatch,getState)=>{
    dispatch({type: PATIENT_REQUEST,payload:{}});
    try{
        var {data}=await Axios.get(`https://localhost:7204/api/Patient/id?id=${id}`);
        dispatch({type: PATIENT_SUCCESS,payload:data});
        localStorage.setItem('patient',JSON.stringify(getState().patient.patient));
    }catch(error){
        dispatch({type: PATIENT_FAIL,payload:error.message});
    }
}