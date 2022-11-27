import { Link } from "react-router-dom";

export default function PatientComponent(props){
    const {data}=props;
    return (
        <div className="width-11/12 p-4">
           <div className="width-11/12 bg-gray-300 h-14 text-3xl font-semibold px-8">
                <Link className="width-full" to={'/patient/1'}>{data.patientName}</Link>
            </div>
        </div>
    )
}