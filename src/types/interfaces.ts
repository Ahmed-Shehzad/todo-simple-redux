// Todo interface

export interface IBase {
  id: string,
  createdAt?: Date,
  updatedAt?: Date
}

export interface User {
  username: string,
  password: string
}

export interface TodoInterface extends IBase {
  title: string;
  description: string;
  status: TodoStatus;
  isCompleted: boolean;
  users?: User[];
}

export enum TodoStatus {
  TODO = "TODO",
  INPROGRESS = "INPROGRESS",
  BLOCKED = "BLOCKED",
  DONE = "DONE",
  INQA = "INQA",
  DEPLOYED = "DEPLOYED"
}

// Todo form interface
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

interface ITodo {
  handleTodoUpdate: (todo: TodoInterface, user?: User) => void;
  handleTodoRemove: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface extends ITodo {
  todos: TodoInterface[]
}

// Todo item interface
export interface TodoItemInterface extends ITodo {
  todo: TodoInterface;
}
