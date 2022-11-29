import { patientCreateReducer, patientDataUpdateReducer, patientDeleteReducer, patientListReducer,patientReducer} from './reducers/patientReducer';
import {configureStore} from '@reduxjs/toolkit/';
import { doctorCreateReducer, doctorListReducer, doctorReducer,doctorDeleteReducer } from './reducers/doctorReducers';

const initialState={
    patientList:localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients')):[],
    patient:localStorage.getItem('patient') ? JSON.parse(localStorage.getItem('patient')):{},
    doctorList:localStorage.getItem('doctors') ? JSON.parse(localStorage.getItem('doctors')):[],
    doctor:localStorage.getItem('doctor') ? JSON.parse(localStorage.getItem('doctor')):{},
}

export default configureStore({
    reducer:{
        patientList:patientListReducer,
        patient:patientReducer,
        patientDataUpdate:patientDataUpdateReducer,
        createPatient:patientCreateReducer,
        deletePatient:patientDeleteReducer,
        doctorList:doctorListReducer,
        doctor:doctorReducer,
        createDoctor:doctorCreateReducer,
        deleteDoctor:doctorDeleteReducer
    },
    preloadedState:initialState
});