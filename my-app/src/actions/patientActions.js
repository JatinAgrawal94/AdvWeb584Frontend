import Axios from 'axios';
import {PATIENT_LIST_REQUEST,PATIENT_LIST_SUCCESS,PATIENT_LIST_FAIL,PATIENT_REQUEST,PATIENT_SUCCESS,PATIENT_FAIL,PATIENT_PROFILE_UPDATE_REQUEST,PATIENT_PROFILE_UPDATE_SUCCESS,PATIENT_PROFILE_UPDATE_FAILED, PATIENT_CREATE_REQUEST, PATIENT_CREATE_SUCCESS, PATIENT_CREATE_FAIL, PATIENT_DELETE_REQUEST, PATIENT_DELETE_SUCCESS, PATIENT_DELETE_FAIL} from '../constants/patientConstants';

export const getPatients=()=>async(dispatch,getState)=>{
    dispatch({type: PATIENT_LIST_REQUEST,payload:{}});
    try{
        const token=await getState().userSignin.userInfo.token;
        var {data}=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Patient`,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type: PATIENT_LIST_SUCCESS,payload:data});
        localStorage.setItem('patients',JSON.stringify(getState().patientList.patients));
    }catch(error){        
        // check if response exists
        if(error.response!==undefined)
            dispatch({type: PATIENT_LIST_FAIL,payload:{message:error.message,statusCode:error.response.status}});
        else
            dispatch({type: PATIENT_LIST_FAIL,payload:error.message});
    }
}

export const getSpecificPatient=(id)=>async(dispatch,getState)=>{
    dispatch({type: PATIENT_REQUEST,payload:{}});
    try{
        const token=await getState().userSignin.userInfo.token;
        var {data}=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Patient/id?id=${id}`,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type: PATIENT_SUCCESS,payload:data});
        localStorage.setItem('patient',JSON.stringify(getState().patient.patient));
    }catch(error){
        if(error.response!==undefined)
        dispatch({type: PATIENT_FAIL,payload:{message:error.message,statusCode:error.response.status}});
        else
        dispatch({type: PATIENT_FAIL,payload:error.message});
    }
}

export const updatePatientProfile=(id,patient)=>async(dispatch,getState)=>{
    dispatch({type:PATIENT_PROFILE_UPDATE_REQUEST,payload:{}});
    try {
        const token=await getState().userSignin.userInfo.token;
        await Axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/Patient/${id}`,patient,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type:PATIENT_PROFILE_UPDATE_SUCCESS,payload:"Patient Data Updated."});
    } catch (error) {
        if(error.response!==undefined)
        dispatch({type: PATIENT_PROFILE_UPDATE_FAILED,payload:{message:error.message,statusCode:error.response.status}});
        else 
        dispatch({type: PATIENT_PROFILE_UPDATE_FAILED,payload:error.message});
    }
}

export const createPatientProfile=(patient)=>async(dispatch,getState)=>{
    dispatch({type:PATIENT_CREATE_REQUEST,payload:{}})
    try { 
        const token=await getState().userSignin.userInfo.token;
        await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Patient`,patient,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type:PATIENT_CREATE_SUCCESS,payload:"Patient Created"});
    } catch (error) {
        if(error.response!==undefined)
        dispatch({type:PATIENT_CREATE_FAIL,payload:{message:error.message,statusCode:error.response.status}});
        else
        dispatch({type:PATIENT_CREATE_FAIL,payload:error.message});
    }
}

export const deletePatientProfile=(id)=>async(dispatch,getState)=>{
    dispatch({type:PATIENT_DELETE_REQUEST,payload:{}})
    try {
        const token=await getState().userSignin.userInfo.token;
        await Axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/Patient/id?id=${id}`,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type:PATIENT_DELETE_SUCCESS,payload:"Patient Deleted"})
    } catch (error) {
        if(error.response!==undefined)
            dispatch({type:PATIENT_DELETE_FAIL,payload:{message:error.message,statusCode:error.response.status}})
        else
            dispatch({type:PATIENT_DELETE_FAIL,payload:error.message})
    }
}