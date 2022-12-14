import Axios from 'axios';
import {DOCTOR_LIST_REQUEST,DOCTOR_LIST_SUCCESS,DOCTOR_LIST_FAIL,DOCTOR_REQUEST,DOCTOR_SUCCESS,DOCTOR_FAIL,DOCTOR_PROFILE_UPDATE_REQUEST,DOCTOR_PROFILE_UPDATE_SUCCESS,DOCTOR_PROFILE_UPDATE_FAILED, DOCTOR_CREATE_REQUEST, DOCTOR_CREATE_SUCCESS, DOCTOR_CREATE_FAIL, DOCTOR_DELETE_REQUEST, DOCTOR_DELETE_SUCCESS, DOCTOR_DELETE_FAIL} from '../constants/doctorConstants';

export const getDoctors=()=>async(dispatch,getState)=>{
    dispatch({type: DOCTOR_LIST_REQUEST,payload:{}});
    try{
        const token=await getState().userSignin.userInfo.token;
        var {data}=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Doctor`,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type: DOCTOR_LIST_SUCCESS,payload:data});
        localStorage.setItem('doctors',JSON.stringify(getState().doctorList.doctors));
    }catch(error){
        dispatch({type: DOCTOR_LIST_FAIL,payload:error.message});
    }
}

export const getSpecificDoctor=(id)=>async(dispatch,getState)=>{
    dispatch({type: DOCTOR_REQUEST,payload:{}});
    try{
        const token=await getState().userSignin.userInfo.token;
        var {data}=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Doctor/id?id=${id}`,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type: DOCTOR_SUCCESS,payload:data});
        localStorage.setItem('doctor',JSON.stringify(getState().doctor.doctor));
    }catch(error){
        dispatch({type: DOCTOR_FAIL,payload:error.message});
    }
}

export const updateDoctorProfile=(id,doctor)=>async(dispatch,getState)=>{
    dispatch({type:DOCTOR_PROFILE_UPDATE_REQUEST,payload:{}});
    try {
        const token=await getState().userSignin.userInfo.token;
        await Axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/Doctor/${id}`,doctor,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type:DOCTOR_PROFILE_UPDATE_SUCCESS,payload:"Doctor Data Updated."});
    } catch (error) {
        dispatch({type: DOCTOR_PROFILE_UPDATE_FAILED,payload:"Data Update Failed!"});
    }
}

export const createDoctorProfile=(patient)=>async(dispatch,getState)=>{
    dispatch({type:DOCTOR_CREATE_REQUEST,payload:{}})
    try { 
        const token=await getState().userSignin.userInfo.token;
        await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Doctor`,patient,{headers:{'Authorization':`Bearer ${token}`}});
        dispatch({type:DOCTOR_CREATE_SUCCESS,payload:"Doctor Created"});
    } catch (error) {
        console.log(error);
        dispatch({type:DOCTOR_CREATE_FAIL,payload:error.message});
    }
}

export const deleteDoctorProfile=(id)=>async(dispatch,getState)=>{
    dispatch({type:DOCTOR_DELETE_REQUEST,payload:{}})
    try {
        const token=await getState().userSignin.userInfo.token;
        const {status}=await Axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/Doctor/id?id=${id}`,{headers:{'Authorization':`Bearer ${token}`}});
        console.log(status);
        dispatch({type:DOCTOR_DELETE_SUCCESS,payload:"Doctor Deleted"})
    } catch (error) {
        dispatch({type:DOCTOR_DELETE_FAIL,payload:error.message})
    }
}