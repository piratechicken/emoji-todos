import React from 'react'

function TodoItem ({
  description,
  completed = false // If not passed, default to false
}) {
  return (
    <label>
      <input type='checkbox' defaultChecked={ completed } />
        { description }
    </label>
  )
}

export default TodoItem