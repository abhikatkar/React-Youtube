import { useParams } from "react-router-dom"
import { Navbar } from "./Navbar";

import "./Details.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";




export const Details = ()=>{

    const {data} = useSelector((store)=> store.data);

  const {id} = useParams();

    return(
        <div>
            <Navbar/>
            

            

               
                    <div className="big">
                <div className="left">
                    <iframe  src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
                <div className="right">
                {data.map((e)=>{
                    return(
                    <div className="inner">
                        <div className="l"><Link to={`/details/${e.id.videoId}`}><img src={e.snippet.thumbnails.high.url} alt="" /></Link></div>
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