import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import {Navbar, Col, Container, Row, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
  <div>
    <Navigation />
    <Main />
  </div>
  );
}

const NavItemStyles = {
  color: "floralwhite",
  fontSize: "3vh",
  textDecorationLine: "none",
  marginRight: 0
}

const NavItemStyles2 = {
  color: "floralwhite",
  marginRight: "4%",
  fontSize: "2.7vh",
  border: "1px solid floralwhite",
  paddingLeft: "1.3vh",
  paddingRight: "1.3vh",
  paddingTop: "1vh",
  paddingBottom: "1vh",

}

const Navigation = () => (
    <Navbar style={{marginLeft: "1vw", marginRight: "1vw", backgroundColor: "transparent", borderBottom: "1px solid floralwhite"}}>
      {window.innerWidth < window.innerHeight && 
        <Navbar.Text style={NavItemStyles2}>NL</Navbar.Text>
      }
      {window.innerWidth >= window.innerHeight && 
        <Navbar.Text style={NavItemStyles2}>Nick<br/>Latham</Navbar.Text>
      }
      <Container>
        <Row>
          <Col>
            <NavLink style={NavItemStyles} to='/'>About</NavLink>
          </Col>
          <Col>
            <NavLink style={NavItemStyles} to='/projects'>Projects</NavLink>
          </Col>
          <Col>
            <NavLink style={NavItemStyles} to='/contact'>Contact</NavLink>
          </Col>
        </Row>
      </Container>
    </Navbar>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={About}></Route>
    {/* <Route exact path='/about' component={About}></Route> */}
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/projects' component={Projects}></Route>
    <Route exact path='/about' component={About}></Route>
  </Switch>
);

export default App;