import React from 'react';
import {Container} from "react-bootstrap";

const Projects = () => {
  
  return (
      
    <Container style={{marginLeft: "1vw", marginRight: "1vw", marginTop: "1vw"}}>

        <div className='content'>
            <h>Projects</h>
            <p>Below are a few of my projects. For more projects and source code, take a look at my <a href="https://github.com/nlatham1999">Github</a></p>
            <ul>
                <li><a href="https://monstermaze.io/">Monster Maze</a> - A 2D platform game built using flutter</li>
                <li><a href="https://encryptedposting.herokuapp.com/">Encrypted Messaging API</a> - An API where you can post encrypted messages and anyone can view them with the passcode. Made with Ruby, MongoDB, and React and hosted on Heroku. Uses PKCS5 for encrypting messages and ECDSA for authenticating the message poster</li>
                <li><a href="https://anniversaryreminder.netlify.app/">Anniversary Reminder</a> - A fun little web app I made for rembering you and your S.O.'s important anniversaries. Made with AngularJS and hosted on Netlify</li>
                <li><a href="https://videoshare.app">Video Share Web App</a> - A web app for uploading and sharing media across devices. 
                I made this as a way to gain a better understanding of Go, and also, because it seemed like a cool project idea and I like playing around with React. 
                The backend is Heroku+Go and the frontend is Amplify+React. For storage I used MongoDB to store metadata and S3 to store the actual files. You can check out my source code for the fronted <a href="https://github.com/nlatham1999/video-share-frontend">here</a> and the source code for the backend <a href="https://github.com/nlatham1999/video-share">here</a>.</li>
                <li><a href="https://wildfire-analysis-2021.herokuapp.com/">Washington Wildfire Predictor</a> - This was my final project for Data Science Algorithms. It uses the WA DNR wildfire data to predict the size of wildfires in Washington State. The GitHub repo is located <a href="https://github.com/nlatham1999/CPSC322Project-WildfireAnalysis">here</a></li>
                <li><a href="https://skiweather.app">Ski Weather App</a> - a web app that displays the weather for different ski resorts. Made following Neumorphic design styles</li>
                <li><a href="https://gonzagatours.app/">Gonzaga Walking Tours</a> - This was my project for Senior Design. The goal of the project was to create a walking tour application for Gonzaga University and consisted of an Admin Panel to create tours, a mobile app to view tours, and a backend database to store the tours. 
                The GitHub repos for each component are located <a href="https://github.com/nlatham1999/guwt-mobile-app">here</a>, <a href="https://github.com/michaelpeterswa/guwt-admin-panel">here</a>, and <a href="https://github.com/michaelpeterswa/guwt-admin-panel-backend">here</a> </li>
                <li><a href="https://github.com/nlatham1999/CPSC315-Final-Project">Into The Dungeon</a> - This is my final project for iOS app development and is a card/dungeon crawler game</li>
                <li><a href="https://github.com/nlatham1999/PrimeNumberSieve">Prime Number Sieve</a> - a more efficient prime number sieve based off of the Sieve of Eratosthenes</li>
                <li><a href="https://nlatham1999.github.io/StockDataInterface/">Yahoo Finance API</a> - an API to collect historical stock data from Yahoo Finance</li>
                <li><a href="https://play.google.com/store/apps/details?id=app.level.compass">Compass and level</a> - A simple compass and level android app</li>
                <li><a href="https://github.com/nlatham1999/Prims-Algorithm">Prim's Algorithm</a> - This is an implementation of Prims Algorithm I made using processing. It is a pretty basic project but it was my first extracurricular project so it's on here for sentimental reasons</li>
            </ul>
            <h>Publications</h>
            <p>Below are my publications. There's only one at the moment but there might be more in the future</p>
            <ul>
                <li><a href="https://medium.com/geekculture/full-stack-application-with-go-gin-react-and-mongodb-37b63ef71133">Gin+React+MongoDB tutorial</a> - When I was learning Go, I couldn't find a comprehensive tutorial for using MongoDB with Gin that was up to date and so I decided to make my own. I also threw in a React frontend to make it more comprehensive</li>
            </ul>
        </div>
    </Container>
  );
}

export default Projects;