import React, { Component } from 'react';
import Headernav from './homepart/Headernav';
import Bigbg from './homepart/Bigbg';
import Smallform from './formpart/Smallform';
import Services from './servicespart/Services'
import Aboutus from './aboutpart/Aboutus'
import Latest from './latest/Latest'
import Smalljumbo from './smalljumbo/Smalljumbo'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Headernav />
        <Bigbg />
        <Smallform />
        <Services />
        <Aboutus />
        <Latest />
        <Smalljumbo />
      </div>
    );
  }
}

export default Home;