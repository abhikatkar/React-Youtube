

import { GET_DATA, GET_LOADING , GET_ERROR } from "./action";

const initState = {
    data:[],
    loading:false,
    error:false
}


export const dataReducer = (store=initState, {type,payload})=>{

    switch (type) {
        case GET_DATA:
            return {...store, data:payload, loading:false}

        case GET_LOADING:
            return {...store, loading:true}
            
         case GET_ERROR:
             return {...store , error:true} 
         
          default:
              return store    
    }
}
