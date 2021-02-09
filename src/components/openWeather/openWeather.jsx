import React, {useState} from 'react';

const OpenWeather = (props) => {
    const [weather, setWeather] =useState ([])
        function fetchResults() {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.location.coordinates.latitude}&lon=${props.location.coordinates.longitude}&appid=2432b7764de16436f1494396f912f854`
            console.log (URL)
            fetch(URL)

    
                .then((response) => response.json())
                .then((json) => {
                    setWeather(json)
                    console.log(json)})
    }

    return (
        <div>
            <button onClick={fetchResults}>Current Weather</button>
        </div>
    );
};

export default OpenWeather;