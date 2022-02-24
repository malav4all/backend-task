import {Auth} from "../redux/constants/action-types"
import * as API from "../api/index"
import {loginUser} from "../redux/actions/auth"
import { useDispatch } from 'react-redux';
export const signin = (formData) => async () => {
  const dispatch = useDispatch();
  // console.log('formData',formData)
    try {
      const promise = await API.signIn(formData);
      // console.log('Type or Data',Auth,data)
      promise.then((res)=>{
        console.log({res})
        dispatch(loginUser(res.data));
      }).catch((err)=>{
        console.log(err)
      })
      
  
      // navigate('/');
    } catch (error) {
      console.log(error);
    }
};
