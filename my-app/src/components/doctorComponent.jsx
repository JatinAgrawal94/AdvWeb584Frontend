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
        <div className="width-11/12 p-4">
           <div className="width-11/12 bg-gray-300 h-14 text-3xl font-semibold px-8 flex justify-between">
                <Link className="width-full" to={`/doctor/${data.doctorId}`}>{data.doctorName}</Link>
                 <button onClick={()=>{deletePatient()}}>Delete</button>
            </div>
        </div>
    )
}