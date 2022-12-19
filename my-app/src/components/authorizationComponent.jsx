import {verify} from 'jsonwebtoken'
import { useSelector } from 'react-redux';

export default function AuthorizationComponent({children}){
    try {
        const {userInfo}=useSelector(state=>state.userSignin);
        verify(userInfo.token,"this is my custom Secret key for authentication");
        return children;
      } catch (error) {
          window.location.href="/login"
    }
}