import React from 'react'

function TodoItem ({
  description,
  completed = false, // If not passed, default to false
  onToggleCompleted
}) {
  let status

  if (completed) {
    status = '✅'
  }
  else {
    status = '❎'
  }
  
  return (
    <div>
    <label>
      <button type="button"
        onClick={
          (event) => { // Event listener
            console.log('Clicked button', description)
            onToggleCompleted()
          }
        }>
        { status }
      </button> 
      { description }
    </label>
    
    </div>
  )
}

export default TodoItem