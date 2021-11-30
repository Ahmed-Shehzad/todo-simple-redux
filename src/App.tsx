// Import dependencies
import React from 'react'

// Import components
import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'

// Import interfaces
import { TodoInterface } from './types/interfaces'
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { State } from './types/type';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './stores/todo/actionCreators';

// TodoListApp component
const TodoListApp = () => {

  const states: TodoInterface[] = useSelector(
    (state: State<TodoInterface>) => state.states,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveTodo = React.useCallback(
    (state: TodoInterface) => dispatch(ADD_TODO(state)),
    [dispatch]
  );

  const updateTodo = React.useCallback(
    (state: TodoInterface) => dispatch(UPDATE_TODO(state)),
    [dispatch]
  );

  const removeTodo = React.useCallback(
    (state: TodoInterface) => dispatch(REMOVE_TODO(state)),
    [dispatch]
  );

  return (
    <div className="todo-list-app">

    <main>
      <h1>My Todos</h1>
      <TodoForm todos={states}
                handleTodoCreate={saveTodo}
      />
      <TodoList
          todos={states}
          handleTodoRemove={removeTodo}
          handleTodoUpdate={updateTodo}
        />
    </main>
    </div>
  )
}

export default TodoListApp;
