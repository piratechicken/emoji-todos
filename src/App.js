import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

// Data
const items = [
  { description: 'First', completed: true},
  { description: 'Second', completed: true},
  { description: 'Third', completed: false}
]

// UI
class App extends Component {
  render() {
    return (
      <div className="App">
        {
          items.map((item, index) => (
            <TodoItem 
              key={ index }
              description={ item.description }
              completed={ item.completed }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
