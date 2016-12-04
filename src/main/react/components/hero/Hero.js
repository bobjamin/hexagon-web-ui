import React, { Component } from 'react';
import Hexlogo from './hexlogo.png';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import './Hero.css';

class Hero extends Component {
  render() {
        return (
    <Jumbotron className="hero">
    <img src={Hexlogo} role="presentation" />
    <h1 className="hero-heading">HEXAGON</h1>
    <div>
      <p>
        <a className="primary-button">SIGN UP</a>
        <a className="hollow-button">LEARN MORE</a>
      </p>
    </div>
    </Jumbotron>
    )};
}

export default Hero;
