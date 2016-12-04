import React, { Component } from 'react';
import { Navbar, Col } from 'react-bootstrap';
import './Home.css';
import Hero from '../components/hero/Hero';
import Infobox from '../components/infobox/Infobox';

class Home extends Component {
  render() {
    return (
      <div className="App">
      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
        <a className="brand" href="#">hexagon</a>
      </Navbar.Brand>
    </Navbar.Header>
      </Navbar>
      <Hero />
  <section className="section">
    <h2 className="section-heading">Build Today</h2>
    <h3 className="section-subheading">COST FREE CONTINUOUS INTEGRATION AND DELIVERY</h3>
    <div className="info-boxes">
    <div className="container">
    <Col xs={12} md={4} >
      <Infobox icon={'ion-android-watch'} infoText="Easy Peasy" subText="Just runs"/>
    </Col>
    <Col xs={12} md={4} >
      <Infobox icon={'ion-ios-infinite'} infoText="Free" subText="Completely Free"/>
    </Col>
    <Col xs={12} md={4} >
      <Infobox icon={'ion-cloud'} infoText="Just Deploys" subText="All you need is docker"/>
    </Col>
    </div>
    </div>
  </section>
        </div>
    );
  }
}

export default Home;
