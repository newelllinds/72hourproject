import React from 'react';
import {
Card, Button, CardImg, CardTitle, CardText,
CardSubtitle, CardBody
} from 'reactstrap';


const OpenWeatherChild = (props) => {
    return (
    <div>
        <Card>
            <CardBody>
                <CardTitle tag="h5">Weather in Your Area</CardTitle>
                {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Temp: {props.openWeather.main.temp}</CardSubtitle>
                <CardText>Weather: {props.openWeather.weather[1]}</CardText> */}
                <CardText>Wind: ${props.openWeather.wind.speed} </CardText>
            </CardBody>
        </Card>
    </div>
        
    );
};
 
export default OpenWeatherChild;