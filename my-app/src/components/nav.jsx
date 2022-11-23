import { Link } from "react-router-dom";

export function Nav(){
    return (
        <nav>
            Medical Records Management System
            <Link to='/appointment'>Appointments</Link>
            <Link to='/Patient'>Patient</Link>
        </nav>
    );
}

// export default Nav;