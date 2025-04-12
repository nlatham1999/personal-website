import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {

    return (
        <Container style={{marginLeft: "1vw", marginRight: "1vw", marginTop: "1vw"}}>
        <div className='content'>
            <h>About Me</h>
            <p>My name is Nick Latham and I am from Post Falls, Idaho. In the spring of 2021, I graduated Gonzaga 
                University with a Bachelor of Science degree. I majored in Computer Science and minored in Mathematics</p>
            <p>Since January 2023 I have been with Kochava as a software engineer</p>
            <p>From June 2021 until December 2022 I was a software engineer with FAST Enterprises.</p>
            <p>Before that, during the 2020 summer, I interned at Chief Architect Software</p>
            <p>In my free time, I love to hike and run in the summer and ski in the winter. I am also an aspiring rock climber and mountain biker.</p>
            <p>I also love to read so if you have any recomendations on what I should read next - let me know! </p>
            <p>While I was at Gonzaga, I was a member of the Gonzaga Robotics Club and on the embedded systems team of 
                Gonzaga RoboSub. I also volunteered at Blessings Under the Bridge and volunteered at the saturday math 
                tutoring program at Gonzaga
            </p>
        </div>
        </Container>
    );
}

export default About;