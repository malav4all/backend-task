import { Auth } from "../constants/action-types";
export const loginUser = (data) => {
  console.log('Auth Action',data)
    return {
      type: Auth.LOGIN,
      payload: data,
    };
};