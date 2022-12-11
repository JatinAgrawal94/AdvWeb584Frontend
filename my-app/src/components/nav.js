import { Link } from "react-router-dom";
import React from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import { signOutAction } from "../actions/userActions";
export default function Nav(){
    // const signIn=useSelector(state=>state.userSignin);
    // const {userInfo}=signIn;
    // const dispatch=useDispatch();
    // const SignOutFunction=()=>{
    //     dispatch(signOutAction());
    // }

    return (
        <nav className="navbar navbar-expand-lg bg-light bg-secondary">
            <div className="container-fluid">
                <p className="navbar-brand">AppointmentScheduler</p>
                <Link to='/' className="nav-link active">Home</Link>
                <Link to='/appointment' className="nav-link active">Appointments</Link>
                <Link to='/patient' className="nav-link active">Patient</Link>                    
                <Link to='/doctor' className="nav-link active">Doctor</Link>                    
                <Link to='/login' className="nav-link active">Login</Link>
                {/* <button onClick={()=>SignOutFunction()}>SignOut</button> */}
            </div>
        </nav>
    );
}