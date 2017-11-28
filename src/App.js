import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem description='First' completed/>
        <TodoItem description='Second' completed/>
        <TodoItem description='Third'/>
      </div>
    );
  }
}

export default App;
