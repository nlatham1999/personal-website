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
  marginRight: "4%",
  fontSize: "3vmin"

}

const Navigation = () => (
    <Navbar style={{ marginLeft: "5%", backgroundColor: "transparent"}}>
      <Navbar.Text style={NavItemStyles}>Nick Latham</Navbar.Text>
      <Container>
        <Row xs={4} md={4}>
          <Col>
            <NavLink style={NavItemStyles} to='/'>Home</NavLink>
          </Col>
          <Col>
            <NavLink style={NavItemStyles} to='/about'>About</NavLink>
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
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/projects' component={Projects}></Route>
  </Switch>
);

export default App;