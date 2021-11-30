// Import TodoItem
import TodoItem from './todo-item'

// Import interfaces
import {TodoInterface, TodoListInterface, User} from '../types/interfaces'
import React, {useState} from "react";
import {UPDATE_TODO} from "../stores/todo/actionCreators";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";

// TodoList component
const TodoList = (props: TodoListInterface) => {
    const [state, setState] = useState<TodoInterface[] | {}>(props);
    const dispatch: Dispatch<any> = useDispatch();
    const updateTodo = React.useCallback(
        (state: TodoInterface) => dispatch(UPDATE_TODO(state)),
        [dispatch]
    );

    const handleTodoUpdate = (todo: TodoInterface, user?: User) => {
        const item = props.todos.find(t => t.id === todo.id);
        if (item){
            const index = props.todos.indexOf(item);
            if (user){
                todo.users?.push(user);
            }
            todo.updatedAt = new Date();
            props.todos[index] = todo;
            setState({
                ...state,
                todos: props.todos
            });
            updateTodo(todo);
        }
    }
    return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
