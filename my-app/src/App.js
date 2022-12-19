import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Nav from "./components/nav.jsx";
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
import AuthorizationComponent from './components/authorizationComponent.jsx';
import RegisterScreen from './screens/RegisterScreen.js';

function App() {
  dotenv.config();
  return (
    <Router>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
    <div className="width-full">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<AuthorizationComponent><Home/></AuthorizationComponent>}/>
          <Route exact path='/appointment' element={<AuthorizationComponent><AppointmentScreen/></AuthorizationComponent>}/>
          <Route exact path='/appointment/:id' element={<AuthorizationComponent><AppointmentProfile/></AuthorizationComponent>}/>
          <Route exact path='/appointment/create' element={<AuthorizationComponent><AppointmentForm/></AuthorizationComponent>}/>
          <Route exact path='/patient' element={<AuthorizationComponent><PatientScreen/></AuthorizationComponent>}/>
          <Route exact path='/patient/:id' element={<AuthorizationComponent><PatientProfile/></AuthorizationComponent>}/>
          <Route exact path='/patient/create' element={<AuthorizationComponent><PatientForm data={{patientId:"",patientName:"",patientEmail:"",dateOfBirth:"",gender:"",contact:"",bloodgroup:"",address:""}} edit={false}/></AuthorizationComponent>}/>
          <Route exact path='/doctor' element={<AuthorizationComponent><DoctorScreen/></AuthorizationComponent>}/>
          <Route exact path='/doctor/:id' element={<AuthorizationComponent><DoctorProfile/></AuthorizationComponent>}/>
          <Route exact path='/doctor/create' element={<AuthorizationComponent><DoctorForm data={{doctorId:"",doctorName:"",doctorEmail:"",dateOfBirth:"",gender:"",contact:"",bloodgroup:"",designation:"",timings:"-",address:""}} edit={false}/></AuthorizationComponent>}/>
          <Route exact path='/login' element={<LoginScreen/>}/>
          <Route exact path='/register' element={<RegisterScreen/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;

// 