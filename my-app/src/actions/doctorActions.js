import Axios from 'axios';
import {DOCTOR_LIST_REQUEST,DOCTOR_LIST_SUCCESS,DOCTOR_LIST_FAIL,DOCTOR_REQUEST,DOCTOR_SUCCESS,DOCTOR_FAIL,DOCTOR_PROFILE_UPDATE_REQUEST,DOCTOR_PROFILE_UPDATE_SUCCESS,DOCTOR_PROFILE_UPDATE_FAILED, DOCTOR_CREATE_REQUEST, DOCTOR_CREATE_SUCCESS, DOCTOR_CREATE_FAIL, DOCTOR_DELETE_REQUEST, DOCTOR_DELETE_SUCCESS, DOCTOR_DELETE_FAIL} from '../constants/doctorConstants';

export const getDoctors=()=>async(dispatch,getState)=>{
    dispatch({type: DOCTOR_LIST_REQUEST,payload:{}});
    try{
        var {data}=await Axios.get(`https://localhost:7204/api/Doctor`);
        dispatch({type: DOCTOR_LIST_SUCCESS,payload:data});
        localStorage.setItem('doctors',JSON.stringify(getState().doctorList.doctors));
    }catch(error){
        dispatch({type: DOCTOR_LIST_FAIL,payload:error.message});
    }
}

export const getSpecificDoctor=(id)=>async(dispatch,getState)=>{
    dispatch({type: DOCTOR_REQUEST,payload:{}});
    try{
        var {data}=await Axios.get(`https://localhost:7204/api/Doctor/id?id=${id}`);
        dispatch({type: DOCTOR_SUCCESS,payload:data});
        localStorage.setItem('doctor',JSON.stringify(getState().doctor.doctor));
    }catch(error){
        dispatch({type: DOCTOR_FAIL,payload:error.message});
    }
}

export const updateDoctorProfile=(id,patient)=>async(dispatch,getState)=>{
    dispatch({type:DOCTOR_PROFILE_UPDATE_REQUEST,payload:{}});
    try {
        await Axios.put(`https://localhost:7204/api/Doctor/${id}`,patient);
        dispatch({type:DOCTOR_PROFILE_UPDATE_SUCCESS,payload:"Doctor Data Updated."});
    } catch (error) {
        dispatch({type: DOCTOR_PROFILE_UPDATE_FAILED,payload:"Data Update Failed!"});
    }
}

export const createDoctorProfile=(patient)=>async(dispatch,getState)=>{
    dispatch({type:DOCTOR_CREATE_REQUEST,payload:{}})
    try { 
        await Axios.post(`https://localhost:7204/api/Doctor`,patient);
        dispatch({type:DOCTOR_CREATE_SUCCESS,payload:"Doctor Created"});
    } catch (error) {
        console.log(error);
        dispatch({type:DOCTOR_CREATE_FAIL,payload:error.message});
    }
}

export const deleteDoctorProfile=(id)=>async(dispatch,getState)=>{
    dispatch({type:DOCTOR_DELETE_REQUEST,payload:{}})
    try {
        const {status}=await Axios.delete(`https://localhost:7204/api/Doctor/id?id=${id}`);
        console.log(status);
        dispatch({type:DOCTOR_DELETE_SUCCESS,payload:"Doctor Deleted"})
    } catch (error) {
        dispatch({type:DOCTOR_DELETE_FAIL,payload:error.message})
    }
}