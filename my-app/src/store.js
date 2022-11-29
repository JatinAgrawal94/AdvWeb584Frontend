import { patientCreateReducer, patientDataUpdateReducer, patientDeleteReducer, patientListReducer,patientReducer} from './reducers/patientReducer';
import {configureStore} from '@reduxjs/toolkit/';

const initialState={
    patientList:localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients')):[],
    patient:localStorage.getItem('patient') ? JSON.parse(localStorage.getItem('patient')):{},
}

export default configureStore({
    reducer:{
        patientList:patientListReducer,
        patient:patientReducer,
        patientDataUpdate:patientDataUpdateReducer,
        createPatient:patientCreateReducer,
        deletePatient:patientDeleteReducer
    },
    preloadedState:initialState
});