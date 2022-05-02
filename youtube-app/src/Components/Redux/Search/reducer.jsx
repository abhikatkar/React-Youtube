
import { GET_VALUE } from "./action"

const initState = {
    value:false,
}


export const searchReducer = (store=initState, {type,payload})=>{

    switch (type) {
        case GET_VALUE:
            return {...store, value:payload}

         
          default:
              return store    
    }
}
