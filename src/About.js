import React, {useEffect} from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";

const About = () => {

    getPlaylists();


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

    function getPlaylists(){
        axios.get({
            method: "get",
            url: "https://api.spotify.com/v1/albums/3OkqAak6KhIQExElXif7UW",
            headers: {
                // 'Authorization': 'Basic d36520fea5cf4279b122755f34f7ad26:684e4b6a31354995af891d362abd3c19',
                'Authorization' : 'Bearer BQBguss_2tIE9yx-qKY75uf446GRvz8iQ_vfc3aNMaF0cCzZjSr4djSc1Iy-9S_Ryx25a4qe9cnIUPB5yPMya-r5Hi4BBhEL8CJzPqHdwxO8izVc_1XSMraDc70n2QCgOJWtsI7tSutGZUkDRoI2G59Dhw',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response.data);
        })
    }
}

export default About;