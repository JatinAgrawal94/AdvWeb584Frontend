import { useState ,useEffect} from "react";
import { createPatientProfile, updatePatientProfile } from "../actions/patientActions";
import {useDispatch} from 'react-redux';

export default function PatientForm(props){
    const {data,edit}=props;
    const dispatch=useDispatch();
    const [form,setForm]=useState(data);
    let input=document.getElementsByTagName('input');
    useEffect(()=>{
        if(edit!==false)
       dispatch(updatePatientProfile(data.patientId,form)); 
    },[dispatch,data.patientId,form,edit]);

    const createPatient=()=>{
        let payload=form;
        delete payload.patientId;
        dispatch(createPatientProfile(payload));
    }

    const resetForm=()=>{
        for(let i=0;i<input.length;i++){
            input[i].innerHTML="";
        }
        setForm(data);
    }

    return (
        <div className="flex flex-col text-xl p-6 border-2 w-full">
            <p>Name: <input value={form.patientName} onChange={(e)=>{setForm({...form,patientName:e.target.value})}}/></p>
            <p>Email:<input value={form.patientEmail} onChange={(e)=>{setForm({...form,patientEmail:e.target.value})}}/></p>
            <p>DOB:<input value={form.dateOfBirth} onChange={(e)=>{setForm({...form,dateOfBirth:e.target.value})}}/></p>
            <p>Gender:<input value={form.gender} onChange={(e)=>{setForm({...form,gender:e.target.value})}}/></p>
            <p>Contact:<input value={form.contact} onChange={(e)=>{setForm({...form,contact:e.target.value})}}/></p>
            <p>BloodGroup:<input value={form.bloodgroup} onChange={(e)=>{setForm({...form,bloodgroup:e.target.value})}}/></p>
            <p>Address:<input value={form.address}  onChange={(e)=>{setForm({...form,address:e.target.value})}}/></p>
            {edit===false?(
            <div>
            <button onClick={()=>{createPatient()}}>Create</button>
            <button onClick={()=>{resetForm()}}>Reset</button>
            </div>
            ): <p></p>}
        </div>
    );
}