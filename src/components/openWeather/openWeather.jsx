import React, {useEffect, useState} from 'react';
// import OpenWeatherChild from './OpenWeatherChild'
import { ButtonToggle } from 'reactstrap';

const OpenWeather = (props) => {
    const [weather, setWeather] = useState ([])
        
    function fetchResults() {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.location.coordinates.latitude}&lon=${props.location.coordinates.longitude}&appid=2432b7764de16436f1494396f912f854`
            
            fetch(URL)
                .then((response) => response.json())
                .then((json) => {
                    setWeather(json.main)
                    console.log(json)})
    }

    useEffect(() => {
        // fetchResults();
    }, []);


        

    return (
        <div>
            <button onClick={fetchResults}>Current Weather</button>
        
            <p>
                <ButtonToggle color="secondary">{weather.temp}</ButtonToggle>
            </p>
        </div>
    );
};

export default OpenWeather;