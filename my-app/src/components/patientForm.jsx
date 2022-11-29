import { useState } from "react";

export default function PatientForm(props){
    const {data}=props;
    const [name,setName]=useState(data.patientName);
    const [email,setEmail]=useState(data.patientEmail);
    const [dob,setDOB]=useState(data.dateOfBirth);
    const [gender,setGender]=useState(data.gender);
    const [contact,setContact]=useState(data.contact);
    const [bg,setBG]=useState(data.bloodgroup);
    const [add,setAdd]=useState(data.address);

    const updatePatientProfile=()=>{

    }
    return (
        <div className="flex flex-col text-xl p-6 border-2 w-full">
                <p>Name: <input value={name} onChange={(e)=>{setName(e.target.value)}}/></p>
                <p>Email: <input value={email} onChange={(e)=>{setEmail(e.target.value)}}/></p>
                <p>DOB: <input value={dob} onChange={(e)=>{setDOB(e.target.value)}}/></p>
                <p>Gender: <input value={gender} onChange={(e)=>{setGender(e.target.value)}}/></p>
                <p>Contact: <input value={contact} onChange={(e)=>{setContact(e.target.value)}}/></p>
                <p>BloodGroup: <input value={bg} onChange={(e)=>{setBG(e.target.value)}}/></p>
                <p>Address: <input value={add}  onChange={(e)=>{setAdd(e.target.value)}}/></p>
        </div>
    );
}