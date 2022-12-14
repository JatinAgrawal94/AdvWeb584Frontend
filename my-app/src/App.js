import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Nav from "./components/nav.js";
import {Home} from './components/home';
import AppointmentScreen from './screens/appointmentScreen';
import PatientScreen from './screens/patientScreen'
import PatientProfile from './screens/patientProfile'
import DoctorScreen from './screens/doctorScreen'
import PatientForm from './components/patientForm';
import DoctorProfile from './screens/doctorProfile';
import DoctorForm from './components/doctorForm';
import dotenv from 'dotenv';
import LoginScreen from './screens/loginScreen';
import './index.css';
import AppointmentProfile from './screens/appointmentProfile.js';
import AppointmentForm from './components/appointmentForm.jsx';

function App() {
  dotenv.config();
  return (
    <Router>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>

    <div className="width-full">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/appointment' element={<AppointmentScreen/>}/>
          <Route exact path='/appointment/:id' element={<AppointmentProfile/>}/>
          <Route exact path='/appointment/create' element={<AppointmentForm/>}/>
          <Route exact path='/patient' element={<PatientScreen/>}/>
          <Route exact path='/patient/:id' element={<PatientProfile/>}/>
          <Route exact path='/patient/create' element={<PatientForm data={{patientId:"",patientName:"",patientEmail:"",dateOfBirth:"",gender:"",contact:"",bloodgroup:"",address:""}} edit={false}/>}/>
          <Route exact path='/doctor' element={<DoctorScreen/>}/>
          <Route exact path='/doctor/:id' element={<DoctorProfile/>}/>
          <Route exact path='/doctor/create' element={<DoctorForm data={{doctorId:"",doctorName:"",doctorEmail:"",dateOfBirth:"",gender:"",contact:"",bloodgroup:"",designation:"",timings:"-",address:""}} edit={false}/>}/>
          <Route exact path='/login' element={<LoginScreen/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;

// 