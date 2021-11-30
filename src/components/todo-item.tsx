// Import dependencies
import React, {ChangeEvent, FC, FormEvent, Fragment, useState} from 'react'

// Import interfaces
import {TodoItemInterface, TodoStatus, User} from '../types/interfaces'

// TodoItem component
const TodoItem: FC<TodoItemInterface> = (props: TodoItemInterface) => {
    // Create form state
    const [state, setState] = useState(props.todo);

    // Handle todo input change
    const updateTodoInput = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        setState({
            ...state,
            [event.currentTarget.name]: event.currentTarget.value
        });
    };

    const users: User[] = [{username: 'ahmed', password: 'password'}, {username: 'shehzad', password: 'password'}]

    const update = (event: FormEvent) => {
        event.preventDefault();
        props.handleTodoUpdate(state);
    };


    return (
        <Fragment>
            <form onSubmit={(event) => update(event)}>
                <p>Created At:
                    <b>{props.todo.createdAt?.toString()}</b>
                </p>
                <p>Update At:
                    <b>{props.todo.updatedAt?.toString()}</b>
                </p>
                <p>Status:
                    <select name="status" onChange={(event) => updateTodoInput(event)}>
                        <option defaultValue={TodoStatus.TODO}>{TodoStatus.TODO}</option>
                        <option defaultValue={TodoStatus.BLOCKED}>{TodoStatus.BLOCKED}</option>
                        <option defaultValue={TodoStatus.INPROGRESS}>{TodoStatus.INPROGRESS}</option>
                        <option defaultValue={TodoStatus.DONE}>{TodoStatus.DONE}</option>
                        <option defaultValue={TodoStatus.INQA}>{TodoStatus.INQA}</option>
                        <option defaultValue={TodoStatus.DEPLOYED}>{TodoStatus.DEPLOYED}</option>
                    </select>
                </p>
                <p>Title:
                    <input
                        type="text"
                        name="title"
                        onChange={(event) => updateTodoInput(event)}
                        defaultValue={props.todo.title}
                    />
                </p>
                <p>Description:
                    <textarea
                        name="description"
                        onChange={(event) => updateTodoInput(event)}
                        defaultValue={props.todo.description}
                    />
                </p>
                <p>All Users:
                    <select name="user" onChange={(event) => updateTodoInput(event)}>
                        {users.map((user, index) => (
                                <option key={index} defaultValue={user.username}>{user.username}</option>
                         ))}
                    </select>
                </p>
                <button type="submit">
                    Update TODO
                </button>
            </form>
            <button type="button" onClick={(event) => props.handleTodoRemove(props.todo)}>
                Delete TODO
            </button>
        </Fragment>
    )
}

export default TodoItem
