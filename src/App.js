import React, { Component } from 'react';
import Headernav from './pages/home/Headernav'
import Bigbg from './pages/home/Bigbg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headernav />
        <Bigbg />
      </div>
    );
  }
}

export default App;
