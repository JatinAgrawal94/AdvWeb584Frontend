import { useEffect, useState} from "react";
import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { createAppointments } from "../actions/appointmentActions";
import { getPatients } from "../actions/patientActions";
import { getDoctors } from "../actions/doctorActions";

export default function AppointmentForm(props){
    const doctor=useSelector(state=>state.doctorList);
    const patient=useSelector(state=>state.patientList);
    const dispatch=useDispatch();
    const [form,setForm]=useState({});   
    const addAppointment=()=>{
        console.log()
        // dispatch(createAppointments());
    }
    useEffect(()=>{
        dispatch(getDoctors());
        dispatch(getPatients());
    },[dispatch]);
    
    return (
        doctor.loading===false && patient.loading===false?
        <div>
            <div>
                <label className='form-label' htmlFor="exampleDataList">PatientName</label>
                <input className='form-control' type="text" list="datalistOptions" id="exampleDataList" onChange={(e)=>setForm({...form,patientName:e.target.value})}  required/>
                <datalist id="datalistOptions">
                    {
                        patient.patients.map((e)=>{
                            return    <option value={e.patientName} key={e.patientId}/>
                        })
                    }
                </datalist>
            </div>
            <div>
                <label className='form-label' htmlFor="exampleDataList1" >DoctorName</label>
                <input className='form-control' type="text"  list="datalistOptions1" id="exampleDataList1" onChange={(e)=>setForm({...form,doctorName:e.target.value})} required/>
                <datalist id="datalistOptions1">
                {
                        doctor.doctors.map((e)=>{
                           return  <option value={e.doctorName} key={e.doctorId}/>
                        })
                }
                </datalist>
            </div>
            <div>
                <label className='form-label' >Date</label>
                <input className='form-control' type="text"  onChange={(e)=>setForm({...form,date:e.target.value})} required/>
            </div>
            <div>
                <label className='form-label' >Timings</label>
                <input className='form-control' type="text" onChange={(e)=>setForm({...form,timings:e.target.value})} required/>
            </div>
            <div>
                <label className='form-label' htmlFor="exampleDataList2" >AppointmentType</label>
                <input className='form-control' type="text" list="datalistOptions2" id="exampleDataList2" onChange={(e)=>setForm({...form,appointmentType:e.target.value})} required/>
                <datalist id="datalistOptions2">
                <option value="Follow Up"/>
                <option value="New"/>
                </datalist>
            </div>
            <div>
                <label className='form-label' >Reason</label>
                <input className='form-control' type="text"  onChange={(e)=>setForm({...form,reason:e.target.value})}required/>
            </div>
            <button type ="submit" className="btn btn-primary" onClick={()=>addAppointment()}>Create Appointment</button>
        </div>:
        <div>Loading</div>
    );
}