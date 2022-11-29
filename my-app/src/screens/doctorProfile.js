import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getSpecificDoctor} from '../actions/doctorActions'
import DoctorForm from "../components/doctorForm";

export default function DoctorProfile(props){
    const dispatch=useDispatch();
    const p=useSelector(state=>state.doctor);
    const {doctor,loading}=p;
    const id=window.location.pathname.split('/').slice(-1)[0];
    var edit=true;

    useEffect(()=>{
            dispatch(getSpecificDoctor(id));     
    },[dispatch,id]);
    return (
     loading===true || doctor === undefined? <div>Loading</div>:
     <div className="w-full overflow-hidden">
        <div className="p-20">
            <div className="w-full flex flex-row justify-between border-2">
                <div className="w-2/12 h-2/12">
                    <img src='../../profile.png' alt="profile"/>
                </div>
                {edit===false?
                <div className="flex flex-col text-xl p-6 border-2 w-full">
                    <p>Name: {doctor.doctorName}</p>
                    <p>Email: {doctor.doctorEmail}</p>
                    <p>DateofBirth: {doctor.dateOfBirth}</p>
                    <p>Gender: {doctor.gender}</p>
                    <p>Contact: {doctor.contact}</p>
                    <p>Bloodgroup: {doctor.bloodgroup}</p>
                    <p>Designation {doctor.designation}</p>
                    <p>Office hours: {doctor.timings}</p>
                    <p>Address: {doctor.address}</p>
                </div>: <DoctorForm data={doctor} edit={true}/>
                }
            </div>
        </div>
     </div>

    );
}