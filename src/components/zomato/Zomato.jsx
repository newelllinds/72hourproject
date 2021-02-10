import React, { useEffect, useState } from 'react';
import { CardColumns } from 'reactstrap';
import ZomatoChild from './ZomatoChild'


const ZomatoParent = (props) => {
    const [restaurant, setRestaurant] = useState([])

    function fetchResults() {
        const baseURL = `https://developers.zomato.com/api/v2.1/geocode?lat=${props.location.coordinates.latitude}&lon=${props.location.coordinates.longitude}`;

        fetch(baseURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'user-key': '2f30d6be6d7391bc554cd0907dd7b739'
            })
        })
            .then((res) => res.json())
            .then((json) => {
                setRestaurant(json.nearby_restaurants)
                console.log(json.nearby_restaurants)
            })
    }

        useEffect(() => {
            {fetchResults()}
          }, []);

    function displayCards() {
        return restaurant.length > 0 ? restaurant.map((restaurant) => <ZomatoChild zomatoRest={restaurant}/>) : null;        
    }

<<<<<<< HEAD
        return (
            <div>
=======
    return (
        <div>
            {/* <button onClick={fetchResults}>Fetch Restaurants</button> */}
>>>>>>> 53ca2f619f1efaf5ae07088c9b2adace70898d48
                {/* <button onClick={fetchResults}>Fetch Restaurants</button> */}
                
                <CardColumns>
                {displayCards()}
            </CardColumns>
        </div>
    );
}

export default ZomatoParent;