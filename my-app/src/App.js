// import logo from './logo.svg';
import './App.css';
import Table from './Table';
// import testData from './Data/Data'
import React, { useEffect, useState } from 'react';

function App() {
  const [values,setValues]=useState([]);
  useEffect(()=>{
    fetch(
    "https://localhost:7005/",{mode:"cors"})
                .then((res) => res.json())
                .then((json) => {
                    setValues(json)
                })
                .catch((error)=>{
                  console.log(error);
                })
    },[values])

//     var data=[
//     {
//         'key':0,
//         'name':"Jatin Agrawal",
//         'email':'jatinagrawal0801@gmail.com',
//         'dob':'10/08/2000',
//         'gender':'Male',
//         'bloodgroup':'A+',
//         'contact':'9898989898'
//     },
//     {'key':1,
//         'name':"Jatin Agrawal",
//         'email':'jatinagrawal0801@gmail.com',
//         'dob':'10/08/2000',
//         'gender':'Male',
//         'bloodgroup':'A+',
//         'contact':'9898989898'
//     },
//     {'key':2,
//         'name':"Jatin Agrawal",
//         'email':'jatinagrawal0801@gmail.com',
//         'dob':'10/08/2000',
//         'gender':'Male',
//         'bloodgroup':'A+',
//         'contact':'9898989898'
//     },
//     {'key':3,
//         'name':"Jatin Agrawal",
//         'email':'jatinagrawal0801@gmail.com',
//         'dob':'10/08/2000',
//         'gender':'Male',
//         'bloodgroup':'A+',
//         'contact':'9898989898'
//     },
//     {'key':4,
//         'name':"Jatin Agrawal",
//         'email':'jatinagrawal0801@gmail.com',
//         'dob':'10/08/2000',
//         'gender':'Male',
//         'bloodgroup':'A+',
//         'contact':'9898989898'
//     },
//     {'key':5,
//         'name':"Jatin Agrawal",
//         'email':'jatinagrawal0801@gmail.com',
//         'dob':'10/08/2000',
//         'gender':'Male',
//         'bloodgroup':'A+',
//         'contact':'9898989898'
//     },
//     {'key':6,
//         'name':"Jatin Agrawal",
//         'email':'jatinagrawal0801@gmail.com',
//         'dob':'10/08/2000',
//         'gender':'Male',
//         'bloodgroup':'A+',
//         'contact':'9898989898'
//     },
// ]
  return (
    <div className="App">
        <nav>
          Medical Records Management
        </nav>
        <div className="table-heading">
          <p>Name</p>
          <p>Email</p>
          <p>DateOfBirth</p>
          <p>Gender</p>
          <p>Blood Group</p>
          <p>Contact</p>
        </div>
        <div>

        {  
        values.map((element,i)=>{
        return <Table prop={element} key={i+1}/>
        })
      }
        </div>
    </div>

  );
}

export default App;
