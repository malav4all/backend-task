export const saveToken = (tokendetails) =>{
    window && window.localStorage.setItem('accessToken',JSON.stringify(tokendetails))
}

export const savedDetailsInSession = (details) =>{
   window && window.sessionStorage.setItem('userDetails',JSON.stringify(details))
}


// export const checkAutoLogin = (dispatch,history) =>{
//     const userDetails = window && window.sessionStorage.getItem('userDetails');
//     let details = "";
//     if(!userDetails){
//         dispatch(logout(history))
//         return;
//     }
//     details = JSON.parse(userDetails)
//     let expireDate = new Date(details.accessToken)
//     let todayDate = new Date();
//     if(todayDate > expireDate){
//         dispatch(logout(history))
//         return
//     }
    
// }
// export const removeToken = () =>{
//     localStorage.clear("accessToken")
// }