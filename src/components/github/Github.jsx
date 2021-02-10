import React, { useEffect, useState } from "react";
import GithubChild from "./GithubChild";
import { CardColumns } from "reactstrap";

const Github = (props) => {
    const [positions, setPositions] = useState([]);

    function fetchGithub() {
        const url = `https://efa-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=${props.location.coordinates.latitude}&long=${props.location.coordinates.longitude}&markdown=true`;


        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setPositions(json)
                console.log(json)
            });
    }

    useEffect(() => {
        {fetchGithub()}
      }, []);

    function displayCards() {
        return positions.length > 0 ? positions.map((position) => <GithubChild githubJob={position} />) : null;
    }

    return (<div>
        <CardColumns>{displayCards()}</CardColumns>
        {/* <button onClick={fetchGithub}>Get Jobs</button> */}
    </div>
    );
};

export default Github;