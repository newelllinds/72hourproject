import React, { useEffect, useState } from "react";
import GithubChild from "./GithubChild";
import { CardColumns } from "reactstrap";

const Github = () => {
    const [positions, setPositions] = useState([]);
    // const [locations, setLocations] = useState([]);

    // const position => {
    //     const { latitude, longitude } = position.coords;
    //     setLocation({
    //         latitude, longitude
    //     });
    // }

    function fetchGithub() {
        const url = "https://efa-cors-anywhere.herokuapp.com/jobs.github.com/positions.json?markdown=true&lat=${location.coords.latitude}&long=${location.coords.longitude}";

        // "https://efa-cors-anywhere.herokuapp.com/jobs.github.com/positions.json?markdown=true&lat=37.3229978&long=-122.0321823";

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setPositions(json)
                console.log(json)
            });
    }

    useEffect(() => {
        fetchGithub();
    }, []);

    function displayCards() {
        return positions.length > 0 ? positions.map((position) => <GithubChild githubJob={position} />) : null;
    }

    return (<div>
        <CardColumns>{displayCards()}</CardColumns>
    </div>
    );
};

export default Github;