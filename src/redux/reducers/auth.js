import { Auth } from "../constants/action-types";
const intialState = {
  user:[]
}
export const loginUser = (state = intialState, {type,payload}) =>{
  // console.log({payload})
  switch (type) {
    case Auth.LOGIN:
      return { ...state, user:payload };
    default:
      return state;
  }
}
  