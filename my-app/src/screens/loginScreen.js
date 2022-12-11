import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { signinAction } from '../actions/userActions';
export default function LoginScreen(props){
    const dispatch=useDispatch();
    const [credentials,setCred]=useState({username:"",password:""});
    const signin=useSelector(state=>state.userSignin);
    const {userInfo}=signin;
    const loginfunction=()=>{
        dispatch(signinAction(credentials.username,credentials.password));
    }

    useEffect(() => {
        if(userInfo!=null){
            if(userInfo.roles==='Patient'){
                window.location.pathname='/patient';
            }else{
                window.location.pathname='/doctor';
            }
        }
    }, [userInfo])
    

    return(
        // signin.userInfo!=null
        <div className='mb-3'>
            <h1 className='mt-3'>Login Page</h1>
            <div>
                <label className="form-label">Username</label>
                <input className="form-control" onChange={(e)=>setCred({...credentials,username:e.target.value})}/>
            </div>
            <div>
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e)=>{setCred({...credentials,password:e.target.value})}}/>
            </div>
            <button className='btn btn-primary mt-3' onClick={()=>loginfunction()}>Login</button>
        </div>
    );
}