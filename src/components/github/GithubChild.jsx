import React from 'react';
import {
    Card, CardTitle, Button, CardSubtitle, CardBody
} from 'reactstrap';

const GithubChild = (props) => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">{props.githubJob.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{props.githubJob.company}</CardSubtitle>
                <Button outline color="primary"><a href={props.githubJob.url}>Apply Now</a></Button>
            </CardBody>{props.githubJob.description}
        </Card>

    );
};

export default GithubChild;