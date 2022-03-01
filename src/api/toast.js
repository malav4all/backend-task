import {toastr} from 'react-redux-toastr'
export const Tosat = {
    async success(details){
        toastr.success(details,{
            position: "bottom-right",
            autoClose: details.timer || 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,  
        })
    },
    async error(details){
        toastr.error(details,{   
            position: "bottom-right",
            autoClose: details.timer || 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    },
    async waring(details){
        toastr.warning(details,{
            position: "bottom-right",
            autoClose: details.timer || 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}

// export default Tosat