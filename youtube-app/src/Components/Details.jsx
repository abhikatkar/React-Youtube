import { useParams } from "react-router-dom"
import { Navbar } from "./Navbar";

import "./Details.css";
import { useSelector } from "react-redux";




export const Details = ()=>{

    const {data} = useSelector((store)=> store.data);

  const {id} = useParams();

    return(
        <div>
            <Navbar/>
            

            

               
                    <div className="big">
                <div className="left">
                    <iframe src={`https://www.youtube.com/embed/${id}`}></iframe>
                </div>
                <div className="right">
                {data.map((e)=>{
                    return(
                    <div className="inner">
                        <div className="l"><img src={e.snippet.thumbnails.high.url} alt="" /></div>
                        <div className="r">
                            <h4>{e.snippet.title}</h4>
                            <h7>{e.snippet.channelTitle}</h7>
                        </div>
                    </div>
                    )
                    })}
                </div>
            </div>
                
            
        </div>
    )
}