import axios from  "axios"
 const API = axios.create({baseURL:"http://localhost:5000"})


// API.interceptors.request.use((req)=>{
//     console.log(req)
//     if(localStorage.getItem('accessToken')){
//         req = `Bearer ${localStorage.getItem('accessToken')}`
//     }
//     return req;
// })
export const signIn = (formData) =>  API.post('/auth/login', formData);





