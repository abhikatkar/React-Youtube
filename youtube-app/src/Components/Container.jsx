import { useEffect, useState } from "react";
import "./Container.css";
import axios from "axios";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getData, getLoading, getError } from "./Redux/Data/action";

export const Container = () => {
  const [query, setQuery] = useState("songs");

  const dispatch = useDispatch();
  const {allData,loading,error} = useSelector((store) => store.data);

  
  useEffect(() => {
      getInfo();
  }, []);

  function getInfo() {
    dispatch(getLoading());

    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=&order=viewCount&q=india&type=video&key=AIzaSyDlQhs42tIHeue1zRINWk1sdZtMLs4pf84"
      )
      .then(({data}) => {
        dispatch(getData(data.items));
      })
      .catch(() => dispatch(getError()));
  }

  return loading ? <h1 className="loading...">Loading</h1> : (
    <div className="container">
      <h1>container</h1>
    </div>
  );
};
