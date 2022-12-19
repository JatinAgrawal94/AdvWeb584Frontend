import React, { useState }  from 'react';
import { useDispatch} from 'react-redux';
import { registerAction} from '../actions/userActions'

export default function RegisterScreen(props){
    const dispatch=useDispatch();
    const [credentials,setCred]=useState({username:"",password:"",confirmPassword:""});
    
    const registerfunction=()=>{
        dispatch(registerAction(credentials.username,credentials.password,credentials.confirmPassword));
    }

    return(
        <div className='mb-3'>
            <h1 className='mt-3'>Register Page</h1>
            <div>
                <label className="form-label">Username</label>
                <input className="form-control" onChange={(e)=>setCred({...credentials,username:e.target.value})}/>
            </div>
            <div>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e)=>{setCred({...credentials,password:e.target.value})}}/>
            </div>
            <div>
                <label className="form-label">ConfirmPassword</label>
                <input type="password" className="form-control" onChange={(e)=>{setCred({...credentials,confirmPassword:e.target.value})}}/>
            </div>
            <p className='text-danger'>*Password should contain Uppercase,Lowercase letters and digits and No Special Case Characters</p>  
            <button className='btn btn-primary mt-3' onClick={()=>registerfunction()}>Register</button>
        </div>
    );
}