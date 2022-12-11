// this page shows list of all patients
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getPatients} from '../actions/patientActions'
import PatientComponent from '../components/patientComponent';
import { Link } from "react-router-dom";
import React from 'react';
export default function PatientScreen(){
    const dispatch=useDispatch();
    const patient=useSelector(state=>state.patientList);
    const {patients,loading}=patient;
    useEffect(()=>{
        dispatch(getPatients());
    },[dispatch]);

    return (
        <div>
           <p className="fw-bold"> List of Patients</p>
            <Link to='/patient/create' className="btn btn-primary">Add Patient</Link>    
            {loading===false?
            <div className="list-group">
                {patients.map((e)=>{
                    return <PatientComponent  key={e.patientId} data={e}/>
                })}
            </div>
            : <div>Loading</div>
            }
        </div>
    )    
}