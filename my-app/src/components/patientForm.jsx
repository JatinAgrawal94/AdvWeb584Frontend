import { useState } from "react";
import { createPatientProfile, updatePatientProfile } from "../actions/patientActions";
import {useDispatch, useSelector} from 'react-redux';
import React  from 'react';
import { useNavigate } from "react-router";
export default function PatientForm(props){
    const {userInfo}=useSelector(state=>state.userSignin);
    const navigate=useNavigate();
    if(userInfo===undefined || Object.keys(userInfo).length===0){
        navigate("/login");
    }
    const {data,edit}=props;
    const dispatch=useDispatch();
    const [form,setForm]=useState(data);
    let input=document.getElementsByTagName('input');
    // const [primary,setPrimary]=useState("alert alert-primary d-none");
    // const [danger,setDanger]=useState("alert alert-danger d-none")
    const createPatient=(event)=>{
        event.preventDefault();
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
    const updatePatient=(e)=>{
        e.preventDefault();
        dispatch(updatePatientProfile(data.patientId,form));
    }

    // const afunction=()=>{
    //     setPrimary("alert alert-primary");
    //     setTimeout(()=>setPrimary("alert alert-primary"),1000);
    // }

    // useEffect(()=>{
    //     if(update.loading!==undefined && update.success!==undefined){
    //         if(update.loading===false && update.success===true){
    //             afunction();
    //         }
    //     }else if(update.loading!==undefined && update.error!==undefined){
    //         if(update.loading===false){
    //             setDanger("alert alert-danger")
    //             setTimeout(()=>{
    //                 setDanger("alert alert-danger d-none");
    //             },1000)
    //         }
    //     }
    // },[update])

    return ( 
    <div className="container m-1">
        <div className="p-20">
            <form onSubmit={(e)=>{edit===false?createPatient(e):updatePatient(e)}}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input className="form-control" type="text" value={form.patientName} onChange={(e)=>{setForm({...form,patientName:e.target.value})}} required/>
                </div>
                <div className="form-group">
                <label htmlFor="">Email</label>
                    <input className="form-control" type="email" value={form.patientEmail} onChange={(e)=>{setForm({...form,patientEmail:e.target.value})}} required/>
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
                    <label htmlFor="">Address</label>
                    <input className="form-control" type="text" value={form.address}  onChange={(e)=>{setForm({...form,address:e.target.value})}} required/>
                </div>
                    {edit===false?(
                    <div className="d-flex flex-row justify-start-between">
                    <button type="submit" value="Submit" className="btn btn-primary mx-1 my-1">Create Patient</button>
                    <button className="btn btn-secondary my-1" onClick={()=>{resetForm()}}>Reset</button>
                    </div>
                    ): <button type="submit" value="Submit" className="btn btn-primary mx-1 my-1">Update Patient Data</button>}
                    
                    {/* {
                        update.loading!==undefined && update.success!==undefined?
                        update.loading===false && update.success===true?
                        <div className="alert alert-primary" role="alert">Data Updated</div>    

                    } */}
                    {/* <div className={primary} role="alert">Data Updated</div>                                              
                    <div className={danger} role="alert">Data Updated Failed</div>         */}
                </form>
       
        </div>
    </div>
    );
}