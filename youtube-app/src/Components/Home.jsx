import { Container } from "./Container"
import { Left } from "./Left"
import { Navbar } from "./Navbar";
import './Home.css';



export const Home = () => {
      
   
    

    return(
        <div>
            
            <Navbar/>

            <div className="home">
                <Left/>
                <Container/>
            </div>
        
        </div>
    )
}