import React, { useState, useEffect } from 'react';
import './App.css';
import { Alert } from 'reactstrap';
import Zomato from './components/zomato/Zomato';
import Nasa from './components/nasa/Nasa';
import Github from './components/github/Github';
import OpenWeather from "./components/openWeather/openWeather";

function App() {
  const [location, setLocation] = useState("");
  console.log(location);

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported"
            });
        }
        navigator.geolocation.watchPosition(onSuccess[onError[options]]);
  }, []);
// function App() {
//   const [location, setLocation] = useState("");
//   console.log(location);

//   const onSuccess = (location) => {

  const waitingOnLocation = () => {
    return location === '' ? '' : <Nasa location={location} />
  }

  const waitingZomato = () => {
    return location === '' ? '' : <Zomato location={location} />
  }

  const waitingGit = () => {
    return location === '' ? '' : <Github location={location} />
  }
<<<<<<< HEAD
=======

  const waitingWeather = () => {
    return location === '' ? '' : <OpenWeather location={location} />
  }
>>>>>>> 53ca2f619f1efaf5ae07088c9b2adace70898d48

  return (
    <div className="text-center">
      <Alert><h2>You are located at:</h2>
      {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet."}

      </Alert>
      {/* <Zomato location={location} /> */}
      {/* <Nasa location={location} /> */}
      {/* <OpenWeather location={location} /> */}
<<<<<<< HEAD
=======
      {waitingWeather()}
      {waitingGit()}
>>>>>>> 53ca2f619f1efaf5ae07088c9b2adace70898d48
      {waitingOnLocation()}
      {waitingZomato()}
      {waitingGit()}
    </div>
  );
}

export default App;