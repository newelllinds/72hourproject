import React, {useState} from 'react';
import OpenWeatherChild from './OpenWeatherChild'
import { CardColumns } from 'reactstrap';

const OpenWeather = (props) => {
    const [weather, setWeather] =useState ([])
        function fetchResults() {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.location.coordinates.latitude}&lon=${props.location.coordinates.longitude}&appid=2432b7764de16436f1494396f912f854`
            console.log (URL)
            fetch(URL)

    
                .then((response) => response.json())
                .then((json) => {
                    setWeather(json)
                    console.log(json.wind.speed)})
    }

        function displayWeather() {
        return weather.length > 0 ? weather.map((weather) => <OpenWeatherChild openWeather={weather}/>) : null;
                
    }

    return (
        <div>
            <button onClick={fetchResults}>Current Weather</button>
            <CardColumns>
                {displayWeather()}
                </CardColumns>
        </div>
    );
};

export default OpenWeather;