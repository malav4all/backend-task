import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

class Apihandler {
  login = (data) =>
    new Promise((resolve, reject) => {
      API.post("/auth/login", data)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  register = (data) =>
    new Promise((resolve, reject) => {
      API.post("/auth/register", data)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
}
export const api = new Apihandler();
