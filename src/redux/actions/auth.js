import { Auth } from "../constants/action-types";
export const loginUser = (data) => {
    return {
      type: Auth.LOGIN,
      payload: data,
    };
};