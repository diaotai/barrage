import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import  Animate from 'react-smooth';
import Content from './content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Content from="60%" to="-60%" duration="7500"  content="Hello world"/>
        </div>
      </div>
    );
  }
}

export default App;
