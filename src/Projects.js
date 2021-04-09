import React from 'react';
import {Container} from "react-bootstrap";

const Projects = () => {
  
  return (
      
    <Container style={{margin: "5%"}}>
        <div className='content'>
            <h>Projects</h>
            <p>Below are a few of my projects. For more projects and source code, take a look at my <a href="https://github.com/nlatham1999">Github</a></p>
            <ul>
                <li><a href="https://github.com/nlatham1999/Prims-Algorithm">Prim's Algorithm</a> - This is an implementation of Prims Algorithm I made using processing</li>
                <li><a href="https://play.google.com/store/apps/details?id=app.score.xcscorekeeper">XC Score Keeper</a> - An android app to record scores during a cross country meet. Currently remaking it</li>
                <li><a href="https://play.google.com/store/apps/details?id=app.level.compass">Compass and level</a> - A simple compass and level android app</li>
                <li><a href="https://nlatham1999.github.io/StockDataInterface/">Yahoo Finance API</a> - an API to collect historical stock data from Yahoo Finance</li>
                <li><a href="https://github.com/nlatham1999/PrimeNumberSieve">Prime Number Sieve</a> - a more efficient prime number sieve based off of the Sieve of Eratosthenes</li>
                <li><a href="https://github.com/nlatham1999/CPSC315-Final-Project">Into The Dungeon</a> - This is my final project for iOS app development and is a card/dungeon crawler game</li>
                <li><a href="https://skiweather.app">Ski Weather App</a> - a web app that displays the weather for different ski resorts. Made following Neumorphic design styles</li>
            </ul>
        </div>
    </Container>
  );
}

export default Projects;