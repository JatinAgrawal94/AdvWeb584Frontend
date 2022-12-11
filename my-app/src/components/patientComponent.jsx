import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { deletePatientProfile } from "../actions/patientActions";
import { useState} from "react";
import React from 'react';
export default function PatientComponent(props){
    const {data}=props;
    const dispatch=useDispatch();
    const [remove,setRemove]=useState(false);
    const deletePatient=()=>{
        dispatch(deletePatientProfile(data.patientId));
        setRemove(!remove);
    }

    return (
        <div className="list-group-item my-2">
           <div className="d-flex justify-content-between">
                <Link className="text-decoration-none text-dark" to={`/patient/${data.patientId}`}>{data.patientName}</Link>
                 <button onClick={()=>{deletePatient()}} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}