import React from 'react';
import {
  Card, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';


const ZomatoChild = (props) => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">{props.zomatoRest.restaurant.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Cuisine Type: {props.zomatoRest.restaurant.cuisines}</CardSubtitle>
                <CardText>Location: {props.zomatoRest.restaurant.location.address}</CardText>
                <CardText>Average Cost for Two: ${props.zomatoRest.restaurant.average_cost_for_two} </CardText>
            </CardBody>
        </Card>
        
    );
};
 
export default ZomatoChild;