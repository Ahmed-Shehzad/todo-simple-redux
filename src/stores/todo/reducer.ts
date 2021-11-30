import {TodoInterface, TodoStatus} from "../../types/interfaces";
import {Action, State} from "../../types/type";
import * as actionTypes from "./actionTypes";
import {v4 as uuidv4} from 'uuid';

const initialState: State<TodoInterface> = {
  states: []
};

const reducer = (
  state: State<TodoInterface> = initialState,
  action: Action<TodoInterface>
): State<TodoInterface> => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const newTodo: TodoInterface = {
        id: uuidv4(),
        title: action.state.title,
        description: action.state.description,
        createdAt: new Date(),
        status: TodoStatus.TODO,
        isCompleted: false
      };
      return {
        ...state,
        states: state.states.concat(newTodo)
      };
    case actionTypes.UPDATE_TODO:
      return {
        ...state,
        states: state.states
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        states: state.states.filter((todo) => todo.id !== action.state.id)
      };
  }
  return state;
};

export default reducer;
