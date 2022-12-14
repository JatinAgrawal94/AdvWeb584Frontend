import { useState } from "react";
import { createDoctorProfile, updateDoctorProfile } from "../actions/doctorActions";
import {useDispatch} from 'react-redux';
import React from 'react';

export default function DoctorForm(props){
    const {data,edit}=props;
    const dispatch=useDispatch();
    const [form,setForm]=useState(data);
    let input=document.getElementsByTagName('input');
    const updateDoctorData=async(e)=>{
        e.preventDefault();
        dispatch(updateDoctorProfile(data.doctorId,form));
    }
    const createDoctor=(e)=>{
        e.preventDefault();
        let payload=form;
        delete payload.doctorId;
        dispatch(createDoctorProfile(payload));
        resetForm();
    }

    const resetForm=()=>{
        for(let i=0;i<input.length;i++){
            input[i].innerHTML="";
        }
        setForm(data);
    }

    return (
        <div className="container m-1">
            <div className="p-20">            
            <form onSubmit={(e)=>edit===false?createDoctor(e):updateDoctorData(e)}>
            <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input className="form-control" type="text" value={form.doctorName} onChange={(e)=>{setForm({...form,doctorName:e.target.value})}} required/>
                </div>
                <div className="form-group">
                <label htmlFor="">Email</label>
                    <input className="form-control" type="email" value={form.doctorEmail} onChange={(e)=>{setForm({...form,doctorEmail:e.target.value})}} required/>
                </div>
                <div className="form-group">
                <label htmlFor="">Date Of Birth</label>
                    <input className="form-control" type="date" value={form.dateOfBirth} onChange={(e)=>{setForm({...form,dateOfBirth:e.target.value})}} required/>
                </div>
                <div className="input-group my-2">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Gender</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" value={form.gender} onChange={(e)=>{setForm({...form,gender:e.target.value})}} required>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer Not to Say">Prefer Not to Say</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Contact</label>
                    <input className="form-control" type="number" value={form.contact} maxLength="10" onChange={(e)=>{setForm({...form,contact:e.target.value})}} required/>
                </div>
               
                <div className="input-group my-2">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">BloodGroup</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" value={form.bloodgroup} onChange={(e)=>{setForm({...form,bloodgroup:e.target.value})}} required>
                    <option value="" >Select</option>
                        <option value="A+">A+</option>
                        <option value="O+">O+</option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-</option>
                        <option value="O-">O-</option>
                        <option value="B-">B-</option>
                        <option value="AB-">AB-</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Designation</label>
                    <input className="form-control" type="text" value={form.designation}  onChange={(e)=>{setForm({...form,designation:e.target.value})}} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Office Timings</label>
                    <div className="d-flex flex-row">
                        <label htmlFor="" className="col">Start</label>
                        <label htmlFor="" className="col">End</label>
                    </div>
                    <div className="d-flex flex-row ">
                        <input className="form-control col" type="time" value={form.timings.split("-")[0]} onChange={(e)=>{setForm({...form,timings:e.target.value+"-"+form.timings.split("-")[1]})}} required/>
                        <input className="form-control col" type="time" value={form.timings.split("-")[1]} onChange={(e)=>{setForm({...form,timings:form.timings.split("-")[0]+"-"+e.target.value})}} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Address</label>
                    <input className="form-control" type="text" value={form.address}  onChange={(e)=>{setForm({...form,address:e.target.value})}} required/>
                </div>
                
                    {edit===false?(
                    <div className="d-flex flex-row justify-start-between">
                        <button className="btn btn-primary mx-1 my-1" type="submit" value="submit">Create</button>
                        <button className="btn btn-secondary my-1" onClick={()=>{resetForm()}}>Reset</button>
                    </div>
                    ): <button className="btn btn-primary my-1" type="submit" value="submit">Update</button>}
            </form>
            </div>
        </div>
    );
}