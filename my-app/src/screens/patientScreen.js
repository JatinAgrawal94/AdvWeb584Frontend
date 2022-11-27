// this page shows list of all patients
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getPatients} from '../actions/patientActions'
import PatientComponent from '../components/patient';

export default function PatientScreen(){
    const dispatch=useDispatch();
    const patient=useSelector(state=>state.patientList);
    const {patients,loading}=patient;
    useEffect(()=>{
        dispatch(getPatients());
    },[dispatch]);

    return (
        <div>
            List of Patients
            {loading===false?
            patients.map((e)=>{
                return <PatientComponent  key={e.patientId} data={e}/>
            })
            : <div>Loading</div>
            }
        </div>
    )    
}