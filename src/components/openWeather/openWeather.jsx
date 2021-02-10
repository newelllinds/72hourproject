<<<<<<< HEAD
// import React, {useEffect, useState} from 'react';
// import OpenWeatherChild from './OpenWeatherChild'
// import { Card, ButtonToggle } from 'reactstrap';

// const OpenWeather = (props) => {
//     const [weather, setWeather] = useState ([])
        
//     function fetchResults() {
//             const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.location.coordinates.latitude}&lon=${props.location.coordinates.longitude}&appid=2432b7764de16436f1494396f912f854`
            
//             fetch(URL)
//                 .then((response) => response.json())
//                 .then((json) => {
//                     setWeather(json)
//                     console.log(json.main)})
//     }
=======
import React, {useEffect, useState} from 'react';
// import OpenWeatherChild from './OpenWeatherChild'
import { ButtonToggle } from 'reactstrap';

const OpenWeather = (props) => {
    const [weather, setWeather] = useState ([])
      
    
    function fetchResults() {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.location.coordinates.latitude}&lon=${props.location.coordinates.longitude}&${units=metric}&appid=2432b7764de16436f1494396f912f854`
            
            fetch(URL)
                .then((response) => response.json())
                .then((json) => {
                    setWeather(json.main)
                    console.log(json)})
    }
>>>>>>> 53ca2f619f1efaf5ae07088c9b2adace70898d48

//     useEffect(() => {
//         // fetchResults();
//     }, []);

    const oppositeUnit = unit === "C" ? "F" : "C";

    const convert = () => {
        if (unit === "C") {
            const newT = temp * 1.8 + 32;
            setTemp(Math.round(newT));
            setUnit(oppositeUnit);
        }

        if (unit === "F") {
            const newT = ((temp - 32) * 5) / 9;
            setTemp(Math.round(newT));
            setUnit(oppositeUnit);
        }
    };

<<<<<<< HEAD
//         function displayWeather() {
//         return weather.length > 0 ? weather.map((weathers) => <OpenWeatherChild openWeat={weathers}/>) : null;
                
//     }

//     return (
//         <div>
//             <button onClick={fetchResults}>Current Weather</button>
//             <p>
//             {displayWeather()}
//             </p>
//         </div>
//     );
// };
=======

    return (
        <div>
            <button onClick={fetchResults}>Current Weather</button>
            <p>
                <ButtonToggle color="secondary">{weather.temp}</ButtonToggle>
            </p>
        </div>
    );
};
>>>>>>> 53ca2f619f1efaf5ae07088c9b2adace70898d48

// export default OpenWeather;