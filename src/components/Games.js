import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Card from './Card';

const Games = () => {

  const API = "https://www.amiiboapi.com"

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${API}/api/amiibo/`)
    .then(res => {
      console.log(res.data);
      setData(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <div className="countries">
        {
          data.amiibo
          ?
          <ul className="countries-list">
            {data.amiibo.map((game, index) => (
              <Card game={game} key={index} />
            ))}
          </ul>
          :
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader
              type="Oval"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        }
        {}
    </div>
  );
};

export default Games;