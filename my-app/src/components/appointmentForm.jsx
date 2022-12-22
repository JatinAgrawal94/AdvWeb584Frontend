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
    const errorSectionCSS={
        color:"red"
    }
    const addAppointment=(e)=>{       
        e.preventDefault();  
        const result1=patient.patients.filter((e)=>e.patientName===form.patientName);
        const result2=doctor.doctors.filter((e)=>e.doctorName===form.doctorName);
        if(form.appointmentType!=="Follow Up" && form.appointmentType!=="New"){
            document.getElementsByClassName('error-section')[0].innerHTML="AppointmentType is invalid";
        }
        else if(result1.length!==0 && result2.length!==0){
            form.patientId=result1[0].patientId;
            form.doctorId=result2[0].doctorId;
            dispatch(createAppointments(form));
            let input=document.getElementsByTagName('input');
            for(let i=0;i<input.length;i++){
                input[i].value="";
            }
        }else{
            if(result1.length===0 && result2.length===0){
                document.getElementsByClassName('error-section')[0].innerHTML="Doctor and Patient doesn't exist.";
            }
            else if(result1.length===0){
                document.getElementsByClassName('error-section')[0].innerHTML="Patient doesn't exist";

            }else if(result2.length===0){
                document.getElementsByClassName('error-section')[0].innerHTML="Doctor doesn't exist.";
            }
        }
    }

    useEffect(()=>{
        dispatch(getDoctors());
        dispatch(getPatients());
    },[dispatch]);
    
    return (
        doctor.loading===false && patient.loading===false?
        <div>
            <form onSubmit={(e)=>addAppointment(e)}>
            <div>
                <label className='form-label' htmlFor="exampleDataList validationServer01">PatientName</label>
                <input className='form-control has-validation' type="select" list="datalistOptions" id="exampleDataList" onChange={(e)=>setForm({...form,patientName:e.target.value})}  required/>
                <datalist id="datalistOptions">
                    {
                        patient.patients.map((e)=>{
                            return  <option value={e.patientName} key={e.patientId} id={e.patientId} className="patientclass" onClick={(e)=>{console.log(e.target);}}/>
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
                <input className='form-control' type="date"  onChange={(e)=>setForm({...form,date:e.target.value})} required/>
            </div>
            <div>
                <label className='form-label' >Timings</label>
                <input className='form-control' type="time" onChange={(e)=>setForm({...form,timings:e.target.value})} required/>
            </div>
            <div>
                <label className='form-label' htmlFor="exampleDataList2" >AppointmentType</label>
                <input className='form-control' type="text" list="datalistOptions2" id="exampleDataList2" onChange={(e)=>setForm({...form,appointmentType:e.target.value})} placeholder="New or Follow Up?" required/>
                <datalist id="datalistOptions2">
                <option value="Follow Up"/>
                <option value="New"/>
                </datalist>
            </div>
            <div>
                <label className='form-label' >Reason</label>
                <input className='form-control' type="text"  onChange={(e)=>setForm({...form,reason:e.target.value})}required/>
            </div>
            <button type ="submit" className="btn btn-primary">Create Appointment</button>
            <p className="error-section" style={errorSectionCSS}></p>
            </form>
        </div>:
        <div>Loading</div>
    );
}