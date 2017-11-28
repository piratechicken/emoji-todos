import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {
  // Data
  state = {
    items: [
      { description: 'First', completed: true},
      { description: 'Second', completed: true},
      { description: 'Third', completed: false},
      { description: 'Fourth', completed: true}
    ]
  }
  
  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // Get items
      const beforeItems = prevState.items

      const afterItems = beforeItems.map((item, currentIndex) => {
        // When found index of item to change
        if (currentIndex === index) {
          return {
            ...item, 
            completed: !item.completed
          }
        }
        else {
          return item
        }
      })
      return {
        items: afterItems
      }
    })
  }

  // UI
  render() {
    const items = this.state.items
    const total = items.length

    let totalCompleted = 0
    let totalIncomplete = 0
    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
      else {
        totalIncomplete += 1
      }
    })


    return (
      <div className="App">
        <dl>
          <dt>Total</dt>
          <dd>{ total }</dd>
          <dt>Total completed</dt>
          <dd>{ totalCompleted }</dd>
          <dt>Total incomplete</dt>
          <dd>{ totalIncomplete }</dd>
        </dl>
        <h3>Completed items</h3>
        {
          items.map((item, index) => {
            if (!item.completed) {
              return null
            }
            else {
              return (
                <TodoItem 
                  key={ index }
                  description={ item.description }
                  completed={ item.completed }
                  onToggleCompleted={
                    () => {
                      console.log('TodoItem onToggleCompleted recieved', index)
                      this.onToggleItemAtIndex(index)
                    }
                  }
                />
              )
            }
          })
        }
        <h3>Incomplete items</h3>
        {
          items.map((item, index) => {
            if (item.completed) {
              return null
            }
            else {
              return (
                <TodoItem 
                  key={ index }
                  description={ item.description }
                  completed={ item.completed }
                  onToggleCompleted={
                    () => {
                      console.log('TodoItem onToggleCompleted recieved', index)
                      this.onToggleItemAtIndex(index)
                    }
                  }
                />
              )
            }
          })
        }
      </div>
    );
  }
}

export default App;
