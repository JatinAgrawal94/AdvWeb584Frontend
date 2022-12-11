import React from 'react';
import { Link } from "react-router-dom";

export function AppointmentComponent(prop){
    const {data}=prop;
    return (
        <div className="list-group-item my-2">
        <div className="d-flex justify-content-around">
            <div>{data.patientName}</div>
            <div>{data.doctorName}</div>
            <div>{data.date}</div>
            <div>{data.timings}</div>
            <Link to={`/appointment/${data.appointmentId}`}>Details</Link>
         </div>
     </div>
    );
}