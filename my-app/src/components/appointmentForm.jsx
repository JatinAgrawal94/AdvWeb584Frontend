import { useEffect, useState} from "react";
import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { createAppointments,deleteAppointments } from "../actions/appointmentActions";
import { getPatients } from "../actions/patientActions";
import { getDoctors } from "../actions/doctorActions";

export default function AppointmentForm(props){
    const doctor=useSelector(state=>state.doctorList);
    const patient=useSelector(state=>state.patientList);
    const dispatch=useDispatch();
    const [form,setForm]=useState({
        patientName:"",
        doctorName:"",
        date:"",
        timings:"",
        appointmentType:"",
        reason:"",
        patientId:"",
        doctorId:""
    });   
    const [patientId,setPID]=useState();
    const [doctorId,setDID]=useState();

    const p=document.getElementsByClassName("patientclass");
    

    const addAppointment=()=>{
        // form.patientId=patientId;
        // form.doctorId=doctorId;
        // console.log(form);
        const data={
            patientName:"Jatin Agrawal",
            doctorName:"Parvatesh Parvatikar",
            timings:"12:00PM",
            appointmentType:"Follow-Up",
            date:"12/11/2022",
            reason:"No Reason",
            patientId:1,
            doctorId:1
        }
        for(let i=0;i<p.length;i++){
            console.log(p[i]['id']);
            // console.log(p.isSelected())
        }
        p.namedItem("Jatin Agrawal");
        // dispatch(createAppointments(data));
        // dispatch(deleteAppointments(3));
    }
    // const savePatientId=()=>{

    // }
    // const saveDoctorId=()=>{

    // }
    useEffect(()=>{
        dispatch(getDoctors());
        dispatch(getPatients());
    },[dispatch]);
    
    return (
        doctor.loading===false && patient.loading===false?
        <div>
            <div>
                <label className='form-label' htmlFor="exampleDataList">PatientName</label>
                <input className='form-control' type="select" list="datalistOptions" id="exampleDataList" onChange={(e)=>setForm({...form,patientName:e.target.value})}  required/>
                <datalist id="datalistOptions">
                    {
                        patient.patients.map((e)=>{
                            return  <option value={e.patientName} key={e.patientId} id={e.patientId} className="patientclass" onClick={(e)=>{console.log(e.target);}}/>
                        })
                    }
                </datalist>
            </div>
            {/* <select className="form-select" aria-label="Default select example" >
                <option>Open this select menu</option>
                {
                     patient.patients.map((e)=>{
                        return  <option value={e.patientName} key={e.patientId} onClick={(e)=>{console.log("vfvfv")}}/>
                    })
                }
                <option>Open this select menu</option>
                <option onClick={()=>{console.log(value)}} value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option> 
            </select> */}

            <div>
                <label className='form-label' htmlFor="exampleDataList1" >DoctorName</label>
                <input className='form-control' type="text"  list="datalistOptions1" id="exampleDataList1" onChange={(e)=>setForm({...form,doctorName:e.target.value})} required/>
                <datalist id="datalistOptions1">
                {
                    doctor.doctors.map((e)=>{
                        return  <option value={e.doctorName} key={e.doctorId} onClick={()=>{setDID(e.doctorId)}}/>
                    })
                }
                </datalist>
            </div>
            <div>
                <label className='form-label' >Date</label>
                <input className='form-control' type="date"  onChange={(e)=>setForm({...form,date:e.target.value})} required/>
            </div>
            <div>
                <label className='form-label' >Timings</label>
                <input className='form-control' type="time" onChange={(e)=>setForm({...form,timings:e.target.value})} required/>
            </div>
            <div>
                <label className='form-label' htmlFor="exampleDataList2" >AppointmentType</label>
                <input className='form-control' type="text" list="datalistOptions2" id="exampleDataList2" onChange={(e)=>setForm({...form,appointmentType:e.target.value})} placeholder="first time or follow up?" required/>
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