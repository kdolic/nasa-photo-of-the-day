import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { API_KEY, BASE_URL } from './constants/index';
import NasaPhoto from './components/NasaPhoto'
import NasaInfo from "./components/NasaInfo";

function App() {

  const [photo, setPhoto] = useState([]);


  useEffect(() => {
    const fetchAPOD = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
    }

    fetchAPOD() // immediately invoked function expression
  }, [])


  return (
    <div className="App">
      <NasaPhoto title={photo.title} date={photo.date} url={photo.url} />
      <NasaInfo explanation={photo.explanation} />
    </div>
  );
}

export default App;
