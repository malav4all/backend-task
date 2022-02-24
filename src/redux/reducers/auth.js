import { Auth } from "../constants/action-types";

export const loginUser = (state = {}, {type,payload}) =>{
  console.log({payload})
  switch (type) {
    case Auth.LOGIN:
      return { ...state, ...payload };
    default:
      return state;
  }
}
  