import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getSpecificPatient} from '../actions/patientActions'

export default function PatientProfile(props){
    const dispatch=useDispatch();
    const p=useSelector(state=>state.patient);
    const {patient,loading}=p;
    const id=window.location.pathname.split('/').slice(-1)[0];
    
    useEffect(()=>{
        dispatch(getSpecificPatient(id));
    },[dispatch,id]);
    return (
     loading===true? <div>Loading</div>:
     <div className="w-full overflow-hidden">
        <div className="p-20">
            <div className="w-full flex flex-row justify-between border-2">
                <div className="w-2/12 h-2/12">
                    <img src='../../profile.png' alt="profile"/>
                </div>
                <div className="flex flex-col text-xl p-6 border-2 w-full">
                    <p>Name: {patient.patientName}</p>
                    <p>Email: {patient.patientEmail}</p>
                    <p>DateofBirth: {patient.dateOfBirth}</p>
                    <p>Gender: {patient.gender}</p>
                    <p>Contact: {patient.contact}</p>
                    <p>Bloodgroup: {patient.bloodgroup}</p>
                    <p>Address: {patient.address}</p>
                </div>
            </div>
        </div>
     </div>

    );
}