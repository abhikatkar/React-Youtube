import { useEffect, useState } from "react";
import "./Container.css";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData, getLoading, getError } from "./Redux/Data/action";

export const Container = () => {
  const [query, setQuery] = useState("songs");

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.data);
  console.log(data);

  useEffect(() => {
    getInfo();
  }, []);

  function getInfo() {
    dispatch(getLoading());

    axios
      .get(
        // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q=${query}&type=video&key=AIzaSyBDtD3uMk-u4ZkvmQtJrXrJOIwr5yBvS88`
      )
      .then(({ data }) => {
        dispatch(getData(data.items));
      })
      .catch(() => dispatch(getError()));
  }

  return (
    <div className="container">
      
      <div className="allOne">
      {data.map((e) => {
        return (
          
            <div className="box">
              <img
                src={e.snippet.thumbnails.high.url}
                alt=""
              />
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
    </div>
  );
};

// loading ? (
//   <h1 className="loading">Loading...</h1>
// ) : error ? (
//   <h1 className="loading">Error</h1>
// ) :
