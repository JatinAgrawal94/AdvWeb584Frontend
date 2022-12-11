import {APPOINTMENT_LIST_REQUEST,APPOINTMENT_LIST_SUCCESS,APPOINTMENT_LIST_FAIL,APPOINTMENT_CREATE_REQUEST,APPOINTMENT_CREATE_SUCCESS,APPOINTMENT_CREATE_FAIL,APPOINTMENT_UPDATE_REQUEST,APPOINTMENT_UPDATE_SUCCESS,APPOINTMENT_UPDATE_FAIL,APPOINTMENT_DELETE_REQUEST,APPOINTMENT_DELETE_SUCCESS,APPOINTMENT_DELETE_FAIL} from '../constants/appointmentConstants';
import Axios from 'axios';

export const getAppointments=()=>async(dispatch,getState)=>{
    dispatch({type: APPOINTMENT_LIST_REQUEST,payload:{}});  
    try {
        var {data}=await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Appointment`);
        dispatch({type: APPOINTMENT_LIST_SUCCESS,payload:data});  
        localStorage.setItem('appointments',JSON.stringify(getState().getAppointment.appointments));
    } catch (error) {
        dispatch({type:APPOINTMENT_LIST_FAIL,payload:error.message});
    }
}


export const createAppointments=(d)=>async(dispatch,getState)=>{
    dispatch({type: APPOINTMENT_CREATE_REQUEST,payload:{}});
    try {
        var {data}=await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Appointment`,d);
        dispatch({type: APPOINTMENT_CREATE_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:APPOINTMENT_CREATE_FAIL,payload:error.message});
    }
}


export const deleteAppointments=(id)=>async(dispatch,getState)=>{
    dispatch({type: APPOINTMENT_DELETE_REQUEST,payload:{}});
    try {
        var {data}=await Axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/Appointment/id?id=${id}`);
        dispatch({type: APPOINTMENT_DELETE_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:APPOINTMENT_DELETE_FAIL,payload:error.message});
    }
}


export const updateAppointments=()=>async(dispatch,getState)=>{
    dispatch({type: APPOINTMENT_UPDATE_REQUEST,payload:{}});
    try {
        var {data}=await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Appointment`);
        dispatch({type: APPOINTMENT_UPDATE_SUCCESS,payload:data});
        // localStorage.setItem('patientappointments',JSON.stringify(getState().patientList.patients));
    } catch (error) {
        dispatch({type:APPOINTMENT_UPDATE_FAIL,payload:error.message});
    }
}
