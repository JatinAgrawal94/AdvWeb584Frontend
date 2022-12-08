import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Nav} from "./components/nav";
import {Home} from './components/home';
import AppointmentScreen from './screens/appointmentScreen';
import PatientScreen from './screens/patientScreen'
import PatientProfile from './screens/patientProfile'
import DoctorScreen from './screens/doctorScreen'
import PatientForm from './components/patientForm';
import DoctorProfile from './screens/doctorProfile';
import DoctorForm from './components/doctorForm';
import dotenv from 'dotenv';

function App() {
  dotenv.config();
  return (
    <Router>
    <div className="App width-full">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/appointment' element={<AppointmentScreen/>}/>
          <Route exact path='/patient' element={<PatientScreen/>}/>
          <Route exact path='/patient/:id' element={<PatientProfile/>}/>
          <Route exact path='/patient/create' element={<PatientForm data={{patientId:"",patientName:"",patientEmail:"",dateOfBirth:"",gender:"",contact:"",bloodgroup:"",address:""}} edit={false}/>}/>
          <Route exact path='/doctor' element={<DoctorScreen/>}/>
          <Route exact path='/doctor/:id' element={<DoctorProfile/>}/>
          <Route exact path='/doctor/create' element={<DoctorForm data={{doctorId:"",doctorName:"",doctorEmail:"",dateOfBirth:"",gender:"",contact:"",bloodgroup:"",address:""}} edit={false}/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
