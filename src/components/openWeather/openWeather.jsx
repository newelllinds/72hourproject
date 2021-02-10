import React, {useEffect, useState} from 'react';
// import OpenWeatherChild from './OpenWeatherChild'
import { ButtonToggle } from 'reactstrap';

const OpenWeather = (props) => {
    const [weather, setWeather] = useState ([])
    const [temp, setTemp] = useState(weather.temp)
    const [isCelsius, setIsCelsius] = useState(true);
    console.log(temp)
      
    
    function fetchResults() {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.location.coordinates.latitude}&lon=${props.location.coordinates.longitude}&units=metric&appid=2432b7764de16436f1494396f912f854`
            
            fetch(URL)
                .then((response) => response.json())
                .then((json) => {
                    setWeather(json.main)
                    console.log(json)})
    }

    useEffect(() => {
        fetchResults();
    }, []);

    // const oppositeUnit = unit === "C" ? "F" : "C";

    // const convert = () => {
    //     if (unit === "C") {
    //         const newT = temp * 1.8 + 32;
    //         setTemp(Math.round(newT));
    //         setUnit(oppositeUnit);
    //     }

    //     if (unit === "F") {
    //         const newT = ((temp - 32) * 5) / 9;
    //         setTemp(Math.round(newT));
    //         setUnit(oppositeUnit);
    //     }
    // };

function handleToggle(){
    setIsCelsius(!isCelsius);
    console.log('handleToggle')
}

    return (
        <div>
            {/* <button onClick={fetchResults}>Current Weather</button> */}
            <p>
                <button onClick={handleToggle}>Click to Toggle Between Farenheit and Celsius</button>
                {weather.temp}
            </p>
        </div>
    );
};

export default OpenWeather;