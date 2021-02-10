import React, { useEffect, useState } from 'react';

const Nasa = (props) => {
    const [image, setImage] = useState([]);

    function fetchResults() {
        const API_KEY = "hcOgmvFjiS7DrUDnmFOTATwp4ckeoP3wsGQWRwor";
        const URL = `https://api.nasa.gov/planetary/earth/imagery?lon=${props.location.coordinates.longitude}&lat=${props.location.coordinates.latitude}&date=2014-02-01&dim=0.15&api_key=${API_KEY}`

        fetch(URL, {
            method: 'GET',
        })

            .then((response) => {
                setImage(response.url);
                console.log(response.url)
                console.log(props);
            });
    }
    console.log(URL);
    useEffect(() => {
        {fetchResults()}
      }, []);

    return (
        <div>
            {/* <button onClick={fetchResults}>Fetch Nasa</button> */}
            <img src = {image} Image goes here/>
        </div>
    );
};

export default Nasa;