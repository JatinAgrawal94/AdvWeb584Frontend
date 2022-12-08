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
        <div className="width-11/12 p-4">
           <div className="width-11/12 bg-gray-300 h-14 text-3xl font-semibold px-8 flex justify-between">
                <Link className="width-full" to={`/patient/${data.patientId}`}>{data.patientName}</Link>
                 <button onClick={()=>{deletePatient()}}>Delete</button>
            </div>
        </div>
    )
}