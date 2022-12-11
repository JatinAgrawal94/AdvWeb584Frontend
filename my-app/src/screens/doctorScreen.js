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
            <p className="fw-bold">List of Doctors</p>
            <Link to='/doctor/create' className="btn btn-primary">Add Doctors</Link>    
            {loading===false?
            <div className="list-group">
               { doctors.map((e)=>{
                     return <DoctorComponent  key={e.doctorId} data={e}/>
                })}
            </div>
            : <div>Loading</div>
            }
        </div>
    )
}