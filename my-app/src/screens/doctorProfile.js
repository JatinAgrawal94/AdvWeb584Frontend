import { useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getSpecificDoctor} from '../actions/doctorActions'
import DoctorForm from "../components/doctorForm";
import React  from 'react';
export default function DoctorProfile(props){
    const dispatch=useDispatch();
    const p=useSelector(state=>state.doctor);
    const {doctor,loading}=p;
    const id=window.location.pathname.split('/').slice(-1)[0];
    const [edit,setEdit]=useState(false);
    const imageStyle={
        width:"200px",
        height:"200px"
    }
    useEffect(()=>{
            dispatch(getSpecificDoctor(id));     
    },[dispatch,id]);

    return (
     loading===true || doctor === undefined? <div>Loading</div>:
     <div>
        <div className="p-2">
            {
                edit===true?
                <button className="btn btn-primary" onClick={()=>{setEdit(!edit);}}>View</button>
                :<button className="btn btn-primary" onClick={()=>{setEdit(!edit);}}>Edit</button>
                
            }
            <div className="d-flex flex-row">
                <div className="w">
                    <img src='../../profile.png' alt="profile"  className="img-fluid" style={imageStyle}/>
                </div>
                {edit===false?
                <div className="card container m-1 p-3">
                    <p className="card-text">Name: {doctor.doctorName}</p>
                    <p className="card-text">Email: {doctor.doctorEmail}</p>
                    <p className="card-text">DateofBirth: {doctor.dateOfBirth}</p>
                    <p className="card-text">Gender: {doctor.gender}</p>
                    <p className="card-text">Contact: {doctor.contact}</p>
                    <p className="card-text">Bloodgroup: {doctor.bloodgroup}</p>
                    <p className="card-text">Designation: {doctor.designation}</p>
                    <p className="card-text">Office hours: {doctor.timings}</p>
                    <p className="card-text">Address: {doctor.address}</p>
                </div>: <DoctorForm data={doctor} edit={true}/>
                }
            </div>
        </div>
     </div>

    );
}