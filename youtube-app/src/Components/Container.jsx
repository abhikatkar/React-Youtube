import { useEffect} from "react";
import "./Container.css";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData, getLoading, getError } from "./Redux/Data/action";
import { Link } from "react-router-dom";

export const Container = () => {
 

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.data);
  const {value} = useSelector((store)=> store.value)
 

  useEffect(() => {
    getInfo("music");
  },[]);

  function getInfo(value) {
    dispatch(getLoading());

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=18&order=viewCount&q=${value}&type=video&key=AIzaSyBDtD3uMk-u4ZkvmQtJrXrJOIwr5yBvS88`
      )
      .then(({ data }) => {
        dispatch(getData(data.items));
      })
      .catch(() => dispatch(getError()));
  }

  return (
    loading ? (
      <h1 className="loading">Loading...</h1>
    ) : error ? (
      <h1 className="loading">Error</h1>
    ) :  
    
    <div className="container">

      <div className="top">
        <button onClick={()=> (getInfo("JavaScript"))}>JavaScript</button>
        <button onClick={()=> (getInfo("Comedies"))}>Comedies</button>
        <button onClick={()=> (getInfo("Doctor Strange"))}>Doctor Strange</button>
        <button onClick={()=> (getInfo("Cricket"))}>Cricket</button>
        <button onClick={()=> (getInfo("E-Vehicles"))}>E-Vehicles</button>
        <button onClick={()=> (getInfo("Music"))}>Music</button>
        <button onClick={()=> (getInfo("ReactJs"))}>ReactJs</button>
        <button onClick={()=> (getInfo("NodeJs"))}>NodeJs</button>
        <button onClick={()=> (getInfo("HTML"))}>HTML</button>
        <button onClick={()=> (getInfo("css"))}>CSS</button>
        <button onClick={()=> (getInfo("Green Hydrogen"))}>Green Hydrogen</button>
      </div>



      
       {value ? 
      <div className="allOne">
      {data.map((e) => {
        
        return (       
            <div  className="box">
              <Link to={`/details/${e.id.videoId}`}>
              <img
                src={e.snippet.thumbnails.high.url}
                alt=""
              />
              </Link>
              <div className="con">
                <h1>
                  <AiFillGithub />
                </h1>
                <div className="side">
                  <h4>{e.snippet.title}</h4>
                  <p className="channel">{e.snippet.channelTitle}</p>
                </div>
              </div>
              
            </div>            
          
        );
      })}
      </div>
      :
      <div className="allOne">
      {data.map((e) => {
        
        return (  
                
            <div  className="box">
              <Link to={"/signin"}>
              <img
                src={e.snippet.thumbnails.high.url}
                alt=""
              />
              </Link>
              <div className="con">
                <h1>
                  <AiFillGithub />
                </h1>
                <div className="side">
                  <h4>{e.snippet.title}</h4>
                  <p className="channel">{e.snippet.channelTitle}</p>
                </div>
              </div>
              
            </div>            
          
        );
      })}
      </div>

     
    }



      
    </div>
  );
};


