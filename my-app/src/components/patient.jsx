import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getPatients} from '../actions/patientActions'

export function Patient(){
    const dispatch=useDispatch();
    const patient=useSelector(state=>state.patient);
    const {patients,loading}=patient;
    useEffect(()=>{
        dispatch(getPatients());
    },[dispatch]);
    return (
        <div>
            patient
            {loading===false?
            patients.map((e)=>{
                return (<div key={e.patientId}>{e.bloodgroup}</div>)
            }): <div>Loading</div>
            }
        </div>
    )
}