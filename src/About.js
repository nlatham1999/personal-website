import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{margin: "5%"}}>
        <div className='content'>
            <h>About Me</h>
            <p>Hi, name is Nick Latham and I am from Post Falls, Idaho. I attend Gonzaga University 
            where I am a Senior Computer Science major with a minor
            in Mathematics. This past summer I interned at Chief Architect Software and I will be graduating 
            in Spring 2021 with a Bachelor of Science. Begining in June, I will be working for Fast Enterprises as 
            an Implementation Consultant.
            </p>
            <h>Activities and Such</h>
            <p>I am a member of the Gonzaga Robotics Club and am on the embedded systems team of 
                Gonzaga RoboSub.I also volunteer at Blessings Under the Bridge and volunteer at the saturday math 
                tutoring program here at Gonzaga
            </p>
        </div>
        </Container>
    );
}

export default About;