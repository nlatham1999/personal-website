import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";

const About = () => {

    return (
        <Container style={{marginLeft: "1vw", marginRight: "1vw", marginTop: "1vw"}}>
        <div className='content'>
            <p>Current status: Working my way through <a href="https://adventofcode.com/">Advent Of Code</a> and <a href="https://en.wikipedia.org/wiki/G%C3%B6del%2C_Escher%2C_Bach">Gödel, Escher, Bach</a>, and creating cool stuff</p>
            <h>About Me</h>
            <p>Hi, name is Nick Latham and I am from Post Falls, Idaho. In the spring of 2021, I graduated Gonzaga 
                University with a Bachelor of Science degree. I majored in Computer Science and a minored in Mathematics.</p>
            <p>Since June 2021 I have been working as an Implementation Consultant with FAST Enterprises</p>
            <p>Before that, during the 2020 summer, I interned at Chief Architect Software</p>
            <p> In my free time, I love to hike and run. During the winter, I also love to ski.</p>
            <p> While I was at Gonzaga, I was a member of the Gonzaga Robotics Club and on the embedded systems team of 
                Gonzaga RoboSub. I also volunteered at Blessings Under the Bridge and volunteered at the saturday math 
                tutoring program at Gonzaga
            </p>
        </div>
        </Container>
    );
}

export default About;