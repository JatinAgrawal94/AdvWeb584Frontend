import './Table.css';

function Table(prop){
    return (
        <div className="row">
        <p>{prop.prop.name}</p>
        <p>{prop.prop.email}</p>
        <p>{prop.prop.dob}</p>
        <p>{prop.prop.gender}</p>
        <p>{prop.prop.bloodgroup}</p>
        <p>{prop.prop.contact}</p>
      </div>
    );
}

export default Table;