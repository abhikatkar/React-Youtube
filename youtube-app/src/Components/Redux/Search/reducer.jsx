
import { GET_VALUE } from "./action";
import { GET_USER } from "./action";

const initState = {
    value:false,
    user:"",
}


export const searchReducer = (store=initState, {type,payload})=>{

    switch (type) {
        case GET_VALUE:
            return {...store, value:true}

           case GET_USER:
            return {...store, user:payload}
         
          default:
              return store    
    }
}
