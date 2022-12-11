import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { deleteDoctorProfile } from "../actions/doctorActions";
import { useState} from "react";
import React  from 'react';
export default function DoctorComponent(props){
    const {data}=props;
    const dispatch=useDispatch();
    const [remove,setRemove]=useState(false);
    const deletePatient=()=>{
        dispatch(deleteDoctorProfile(data.doctorId));
        setRemove(!remove);
    }

    return (
        <div className="list-group-item my-2">
           <div className="d-flex justify-content-between">
                <Link className="text-decoration-none text-dark" to={`/doctor/${data.doctorId}`}>{data.doctorName}</Link>
                 <button onClick={()=>{deletePatient()}} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}