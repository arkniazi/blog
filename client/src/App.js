import React, { Component } from 'react';
import './App.css';
import Home  from './components/MainView/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home  />
        {/* <Contacts /> */}
      </div>
    );
  }
}

export default App;
