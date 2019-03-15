import React, { Component } from 'react';
import Headernav from './pages/home/Headernav'
import Bigbg from './pages/home/Bigbg'
import Smallform from './pages/home/Smallform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headernav />
        <Bigbg />
        <Smallform/>
      </div>
    );
  }
}

export default App;
