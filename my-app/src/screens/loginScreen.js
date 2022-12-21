import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { signinAction, signOutAction } from '../actions/userActions'
import { verify } from 'jsonwebtoken';

export default function LoginScreen(props){
    const dispatch=useDispatch();
    const [credentials,setCred]=useState({username:"",password:""});
    const signin=useSelector(state=>state.userSignin);
    const {userInfo}=signin;
    // console.log(signin);
    const loginfunction=()=>{
        dispatch(signinAction(credentials.username,credentials.password));
    }
    
    // useEffect(()=>{
    //     if(userInfo!==undefined){
    //         verify(userInfo.token,"this is my custom Secret key for authentication",function(err,decode){
    //             if(err){
    //                 dispatch(signOutAction());
    //             }
    //         });
    //     }
    // },[userInfo])

    return(
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
            <p className='text-danger'>*Password should contain Uppercase,Lowercase letters and digits and No Special Case Characters</p>
            <button className='btn btn-primary mt-3' onClick={()=>loginfunction()}>Login</button>
        </div>
    );
}