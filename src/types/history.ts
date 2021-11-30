import {Action} from "./type";

class History<T> {
    // @ts-ignore
    actions: Action<T>[] = []
    // @ts-ignore
    set(action: Action<T>){
        this.actions.push(action);
    }
    get(){
        return this.actions;
    }
}

export default History;
