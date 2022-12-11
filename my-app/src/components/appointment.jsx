import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export function AppointmentComponent(prop){
    const {data}=prop;
    // const dispatch=useDispatch();
    // const deleteAppointment=()=>{
    //     dispatch(deleteAppointment(data.appointmentId));
    // }
    return (
        <div className="list-group-item my-2">
        <div className="d-flex justify-content-around">
            <div>{data.patientName}</div>
            <div>{data.doctorName}</div>
            <div>{data.date}</div>
            <div>{data.timings}</div>
            <Link to={`/appointment/${data.appointmentId}`}>Details</Link>
            {/* <button className='btn btn-danger' onClick={()=>{deleteAppointment()}}>Delete</button> */}
         </div>
     </div>
    );
}