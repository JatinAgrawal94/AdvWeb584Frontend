import { useState ,useEffect} from "react";
import { createDoctorProfile, updateDoctorProfile } from "../actions/doctorActions";
import {useDispatch} from 'react-redux';
import React from 'react';

export default function DoctorForm(props){
    const {data,edit}=props;
    const dispatch=useDispatch();
    const [form,setForm]=useState(data);
    let input=document.getElementsByTagName('input');
    useEffect(()=>{
        if(edit!==false)
       dispatch(updateDoctorProfile(data.doctorId,form)); 
    },[dispatch,data.doctorId,form,edit]);

    const createDoctor=()=>{
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
        <div className="w-full overflow-hidden">
            <div className="p-20">
            <div className="w-full flex flex-row justify-between border-2">
            <div className="w-2/12 h-2/12 border-2">
                <div className="my-20">
                    <img src='../../profile.png' alt="profile"/>
                </div>
            </div>
                    <div className="flex flex-col text-xl p-6 align-around w-full">
                        <p className="w-full flex my-1">Name: <input className="w-full px-2 ml-4" value={form.doctorName} onChange={(e)=>{setForm({...form,doctorName:e.target.value})}}/></p>
                        <p className="w-full flex my-1">Email:<input className="w-full px-2 ml-4" value={form.doctorEmail} onChange={(e)=>{setForm({...form,doctorEmail:e.target.value})}}/></p>
                        <p className="w-full flex my-1">DOB:<input className="w-full px-2 ml-4"  value={form.dateOfBirth} onChange={(e)=>{setForm({...form,dateOfBirth:e.target.value})}}/></p>
                        <p className="w-full flex my-1">Gender:<input className="w-full px-2 ml-4" value={form.gender} onChange={(e)=>{setForm({...form,gender:e.target.value})}}/></p>
                        <p className="w-full flex my-1">Contact:<input className="w-full px-2 ml-4" value={form.contact} onChange={(e)=>{setForm({...form,contact:e.target.value})}}/></p>
                        <p className="w-full flex my-1">BloodGroup:<input className="w-full px-2 ml-4"  value={form.bloodgroup} onChange={(e)=>{setForm({...form,bloodgroup:e.target.value})}}/></p>
                        <p className="w-full flex my-1" >Designation:<input className="w-full px-2 ml-4" value={form.designation}  onChange={(e)=>{setForm({...form,designation:e.target.value})}}/></p>
                        <p className="w-full flex my-1" >Timings:<input className="w-full px-2 ml-4" value={form.timings}  onChange={(e)=>{setForm({...form,timings:e.target.value})}}/></p>
                        <p className="w-full flex my-1">Address:<input className="w-full px-2 ml-4" value={form.address}  onChange={(e)=>{setForm({...form,address:e.target.value})}}/></p>
                
                        
                        {edit===false?(
                        <div className="flex justify-between w-2/12">
                            <button className="bg-stone-400 p-0.5" onClick={()=>{createDoctor()}}>Create</button>
                            <button className="bg-stone-400 p-0.5" onClick={()=>{resetForm()}}>Reset</button>
                        </div>
                        ): <p></p>}
                    </div>
            </div>
            </div>
        </div>
    );
}