// Import dependencies
import React, {FormEvent, useState} from 'react'

// Import interfaces
import {TodoFormInterface, TodoInterface} from '../types/interfaces'

// Todo form component
const TodoForm: React.FC<TodoFormInterface> = (todoForm: TodoFormInterface) => {
  // Create form state
  const [state, setState] = useState<TodoInterface | {}>();
  // Handle todo input change
  const handleFormData = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    const item = state as TodoInterface;
    todoForm.handleTodoCreate(item);
  };

  return (
    <form onSubmit={addTodo}>
        <p>Title:
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={event => handleFormData(event)}
          />
        </p>
        <p>Description:
          <textarea
            id="description"
            placeholder="Description"
            onChange={event => handleFormData(event)}
          />
        </p>
      <button type="submit">
        Add TODO
      </button>
    </form>
  )
}

export default TodoForm
