
import { Routes,Route } from "react-router-dom"
import { Details } from "./Details"
import { Home } from "./Home"




export const Routes1 = ()=>{

    return(
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}