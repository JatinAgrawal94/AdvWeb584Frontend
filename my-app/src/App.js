import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Nav} from "./components/nav";
import {Home} from './components/home';
import {Appointment} from './components/appointment';
import {Patient} from './components/patient';
// import dotenv from 'dotenv';
// dotenv.config();
function App() {

  return (
    <Router>
    <div className="App">
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/appointment' element={<Appointment/>}/>
          <Route exact path='/patient' element={<Patient/>}/>
        </Routes>
    </div>
</Router>
  );
}

export default App;
