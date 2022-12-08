// this page shows list of all doctors
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getDoctors} from '../actions/doctorActions'
import DoctorComponent from '../components/doctorComponent';
import { Link } from "react-router-dom";
import React from 'react';

export default function DoctorScreen(){
    const dispatch=useDispatch();
    const doctor=useSelector(state=>state.doctorList);
    const {doctors,loading}=doctor;
    useEffect(()=>{
        dispatch(getDoctors());
    },[dispatch]);
    return (
        <div>
            List of Doctors
            <Link to='/doctor/create' className="px-8">Add Doctors</Link>    
            {loading===false?
            doctors.map((e)=>{
                return <DoctorComponent  key={e.doctorId} data={e}/>
            })
            : <div>Loading</div>
            }
        </div>
    )
}