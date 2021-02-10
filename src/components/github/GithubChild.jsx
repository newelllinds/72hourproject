import React from 'react';
import {
    UncontrolledCollapse, Card, CardTitle, Button, CardSubtitle, CardBody
} from 'reactstrap';

const GithubChild = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{props.githubJob.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.githubJob.company}</CardSubtitle>
                    <Button outline color="primary"><a href={props.githubJob.url}>Job Listing</a></Button>
                </CardBody><Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                    Description
        </Button>
                <UncontrolledCollapse toggler="#toggler">{props.githubJob.description}
                </UncontrolledCollapse>
            </Card>
        </div>
    );
};

export default GithubChild;