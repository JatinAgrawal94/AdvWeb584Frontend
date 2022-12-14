import { useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getSpecificPatient} from '../actions/patientActions'
import PatientForm from "../components/patientForm";
import React  from 'react';

export default function PatientProfile(props){
    const dispatch=useDispatch();
    const [edit,setEdit]=useState(false);
    const p=useSelector(state=>state.patient);
    const {patient,loading}=p;
    const id=window.location.pathname.split('/').slice(-1)[0];
    const imageStyle={
        width:"200px",
        height:"200px"
    }
    useEffect(()=>{
            dispatch(getSpecificPatient(id));     
    },[dispatch,id]);
    return (
     loading===true || patient === undefined? <div>Loading</div>:
     <div>
        <div className="p-2">
            {
                edit===true?
                <button className="btn btn-primary" onClick={()=>{setEdit(!edit);}}>View</button>
                :<button className="btn btn-primary" onClick={()=>{setEdit(!edit);}}>Edit</button>
                
            }
            <div className="d-flex flex-row">
                    <img src='../../profile.png' alt="profile" className="img-fluid" style={imageStyle}/>
                {edit===false?
                <div className="card container m-1">
                    <div className="card-body">
                        <p className="card-text">Name: {patient.patientName}</p>
                        <p className="card-text">Email: {patient.patientEmail}</p>
                        <p className="card-text">DateofBirth: {patient.dateOfBirth}</p>
                        <p className="card-text">Gender: {patient.gender}</p>
                        <p className="card-text">Contact: {patient.contact}</p>
                        <p className="card-text">Bloodgroup: {patient.bloodgroup}</p>
                        <p className="card-text">Address: {patient.address}</p>
                    </div>
                </div>: <PatientForm data={patient} edit={true}/>
                }
            </div>
        </div>
     </div>

    );
}