import { IBase } from './interfaces';

type State<T extends IBase> = {
  states: T[];
};

type Action<T extends IBase> = {
  type: string;
  state: T;
};

type DispatchType = (args: Action) => Action;
