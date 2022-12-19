import {USER_CREATE_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_SIGNIN_FAIL,USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNOUT} from '../constants/userConstants';
import Axios from 'axios';

export const signinAction=(username,password)=>async(dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST,payload:{username,password}});
    try{
        const {data}=await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Account/login`,{userName:username,password:password});
        dispatch({type:USER_SIGNIN_SUCCESS,payload:{token:data.token}});
        // check what key-value pairs are returned by the server
        localStorage.setItem('userInfo',JSON.stringify({token:data.token}));
    }catch(error){
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}

export const signOutAction=()=>async(dispatch)=>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('patients');
    localStorage.removeItem('patient');
    localStorage.removeItem('doctors');
    localStorage.removeItem('doctor');
    localStorage.removeItem('appointments');
    dispatch({type:USER_SIGNOUT});
}


export const registerAction=(username,password,confirmPassword)=>async(dispatch)=>{
    dispatch({type:USER_CREATE_REQUEST,payload:{username,password,confirmPassword}});
    try{
        const data=await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Account/create`,{userName:username,password:password,confirmPassword:confirmPassword});
        console.log(data);
        dispatch({type:USER_CREATE_SUCCESS,payload:"User Created"});
        // localStorage.setItem('userInfo',JSON.stringify({token:data.token}));
    }catch(error){
        dispatch({
            type:USER_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}
