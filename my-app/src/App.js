import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Nav} from "./components/nav";
import {Home} from './components/home';
import AppointmentScreen from './screens/appointmentScreen';
import PatientScreen from './screens/patientScreen'
import PatientProfile from './screens/patientProfile'

function App() {

  return (
    <Router>
    <div className="App width-full">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/appointment' element={<AppointmentScreen/>}/>
          <Route exact path='/patient' element={<PatientScreen/>}/>
          <Route exact path='/patient/:id' element={<PatientProfile/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
