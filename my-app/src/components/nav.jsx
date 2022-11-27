import { Link } from "react-router-dom";

export function Nav(){
    return (
        <nav className="w-full text-3xl flex justify-between">
            Medical Records Management System
            <div className="flex">
            <Link to='/' className="px-8">Home</Link>    
            <Link to='/appointment' className="px-8">Appointments</Link>
            <Link to='/patient' className="px-8">Patient</Link>
            </div>
        </nav>
    );
}

// export default Nav;