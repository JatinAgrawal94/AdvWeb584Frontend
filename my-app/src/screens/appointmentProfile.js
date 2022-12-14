import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { deleteAppointments, getAppointments } from '../actions/appointmentActions';
import { useEffect } from "react";

import {useNavigate} from 'react-router-dom';
export default function AppointmentProfile(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const app=useSelector(state=>state.getAppointment);
    const {loading,appointments}=app;   
    const id=window.location.pathname.split("/")[2];
    const data=appointments!==undefined?appointments.filter(e=>e.appointmentId!==id)[0]:undefined;
    const cardStyle={
        width:"18rem"
    }
    const buttonStyle={
        width:"36rem"
    }
    useEffect(()=>{
        dispatch(getAppointments());
    },[dispatch])

    const deleteAppointment=()=>{
        dispatch(deleteAppointments(data.appointmentId));
        navigate(-1);
    }

    return (
        <div>
            {
                data===undefined  && appointments===undefined && loading===true?
                <div>Loading</div>:
                <div className='d-flex flex-column fs-5'>
                    {
                        data!==undefined?
                        <div className='d-flex flex-column'>

                        <div className='d-flex flex-row mx-auto'>
                        <div className='card' style={cardStyle}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">PatientName</li>
                                <li className="list-group-item">DoctorName</li>
                                <li className="list-group-item">Date</li>
                                <li className="list-group-item">Timings</li>
                                <li className="list-group-item">AppointmentType</li>
                                <li className="list-group-item">Reason</li>
                            </ul>
                        </div>
                        <div className='card' style={cardStyle}>
                             <ul className="list-group list-group-flush">
                                <li className="list-group-item">{data.patientName}</li>
                                <li className="list-group-item">{data.doctorName}</li>
                                <li className="list-group-item">{data.date}</li>
                                <li className="list-group-item">{data.timings}</li>
                                <li className="list-group-item">{data.appointmentType}</li>
                                <li className="list-group-item">{data.reason}</li>
                            </ul>
                        </div>
                        </div>
                            <button className='btn btn-danger mx-auto'  style={buttonStyle} onClick={()=>deleteAppointment()}>Delete Appointment</button>
                       </div>
                       :
                       <div>Loading</div>
                    }
                    
                </div>
            }        
        </div>
    );
}