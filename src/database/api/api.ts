


import axios from "axios";

export default function BaseRequest( url:string){
    const baseURL = "http://localhost:3001/"
    return axios.get(
        `${baseURL}${url}`
    ).then((res) =>{
        console.log(res);
        return(res)
        
    }).catch((err) => {
        console.log(err);
        throw err;
        
        
    })
   
}



