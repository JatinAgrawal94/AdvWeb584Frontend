import { patientCreateReducer, patientDataUpdateReducer, patientDeleteReducer, patientListReducer,patientReducer} from './reducers/patientReducer';
import {configureStore} from '@reduxjs/toolkit/';
import { doctorCreateReducer, doctorListReducer, doctorReducer,doctorDeleteReducer } from './reducers/doctorReducers';
import { userSigninReducer } from './reducers/userReducers';
import { appointmentCreateReducer, appointmentDeleteReducer, appointmentReadReducer, appointmentUpdateReducer } from './reducers/appointmentReducer';

const initialState={
    patientList:{patients:localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients')):[]},
    patient:localStorage.getItem('patient') ? JSON.parse(localStorage.getItem('patient')):{},
    doctorList:localStorage.getItem('doctors') ? JSON.parse(localStorage.getItem('doctors')):[],
    doctor:localStorage.getItem('doctor') ? JSON.parse(localStorage.getItem('doctor')):{},
    userSignin:{
        userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):{}
    },
    getAppointment:localStorage.getItem('appointments')?JSON.parse(localStorage.getItem('appointments')):[]
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
        deleteDoctor:doctorDeleteReducer,
        userSignin:userSigninReducer,
        addAppointment:appointmentCreateReducer,
        deleteAppointment:appointmentDeleteReducer,
        getAppointment:appointmentReadReducer,
        updateAppointment:appointmentUpdateReducer
    },
    preloadedState:initialState
});