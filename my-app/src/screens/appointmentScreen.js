import React from 'react';
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAppointments } from '../actions/appointmentActions';
import { AppointmentComponent } from '../components/appointment';
import { Link } from "react-router-dom";

export default function AppointmentScreen(){ 
    const dispatch=useDispatch();
    const app=useSelector(state=>state.getAppointment);
    const {loading,appointments}=app;   

    useEffect(()=>{
        dispatch(getAppointments());
    },[dispatch])
    // appointment time,patientname(list),doctorname,appointmenttype(new,followup),reason,appointmentdate.
    // for a single entry  show patient name,doctor name,date and time.
    return(
        <div>
            <Link to={`/appointment/create`}>Create Appointment</Link>
            <div className='d-flex flex-row justify-content-around'>
                <p>PatientName</p>
                <p>DoctorName</p>
                <p>Date</p>
                <p>Time</p>
                <p></p>
            </div>
            <div>
                {
                    loading===true && appointments===undefined? <div>Loading Data</div>:
                   appointments!==undefined? <div>
                        {
                            appointments.map((e,index)=>{
                                return <AppointmentComponent key={index} data={e}/>
                            })
                        }
                    </div>: <div></div>
                    
                }
            </div>
            <div></div>
        </div>
    );
}
