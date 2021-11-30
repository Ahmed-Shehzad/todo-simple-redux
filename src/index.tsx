// Import dependencies
import { render } from 'react-dom'
import TodoListApp from './App'

import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { TodoInterface } from './types/interfaces';
import { Action, DispatchType, State } from './types/type';
import reducer from "./stores/todo/reducer";

const store: Store<State<TodoInterface>, Action<TodoInterface>> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <TodoListApp />
  </Provider>,
  rootElement
);
