import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function changeDescriptionOfItemAtIndex(currentItems, index, newDescription) {
  const newItems = currentItems.map((item, currentIndex) => {
    if (currentIndex === index) {
      return {
        ...item, 
        description: newDescription
      }
    }
    else {
      return item
    }
  })
  return newItems
}


function toggleItemAtIndex(beforeItems, index) {
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
  return afterItems
}

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

  onChangeItemDescriptionAtIndex = (index, description) => {
    // Get item
    // Get form input
    // update item.descrption = forminput

    // Get items
    this.setState((currentState) => {
      const currentItems = currentState.items
      
      const newItems = changeDescriptionOfItemAtIndex(currentItems, index, description)

      // Update the `items` in this.state
      return {
        items: newItems
      }
    })
  }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // Get items
      const beforeItems = prevState.items

      const afterItems = toggleItemAtIndex(beforeItems, index)

      return {
        items: afterItems
      }
      
      // return {
      //   items: toggleItemAtIndex(prevState.items, index)
      // }
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
                  onEditDescription={
                    (newDescription) => {
                      console.log('desc updated to', item.description)
                      this.onChangeItemDescriptionAtIndex(index, newDescription)
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
                  onEditDescription={
                    () => {
                      console.log('desc update')
                      this.onChangeItemDescriptionAtIndex(index, item.description)
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
