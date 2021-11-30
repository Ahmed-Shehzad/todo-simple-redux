import {TodoInterface} from "../../types/interfaces";
import { Action, DispatchType } from "../../types/type";
import * as actionTypes from "./actionTypes";
import History from "../../types/history";

// @ts-ignore
const history: History = new History<TodoInterface>();

export function ADD_TODO(state: TodoInterface) {
  const action: Action<TodoInterface> = {
    type: actionTypes.ADD_TODO,
    state
  };

  return simulateHttpRequest(action);
}

export function UPDATE_TODO(state: TodoInterface) {
  const action: Action<TodoInterface> = {
    type: actionTypes.UPDATE_TODO,
    state
  };

  return simulateHttpRequest(action);
}

export function REMOVE_TODO(state: TodoInterface) {
  const action: Action<TodoInterface> = {
    type: actionTypes.REMOVE_TODO,
    state
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: Action<TodoInterface>) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
      history.set(action);
      console.log(history.get())
    }, 500);
  };
}
