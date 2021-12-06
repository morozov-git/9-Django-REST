import React from 'react'
import {HashRouter, Link} from "react-router-dom";


const ToDoItem = ({todo, deleteToDo}) => {
    return (
        <tr>
            <td>
                {todo.is_close}
            </td>
            <td>
                {todo.name}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.description_todo}
            </td>
            {/*<td>*/}
            {/*    {todo.owner}*/}
            {/*</td>*/}
            <td>
                <button onClick={() => deleteToDo(todo.id)} class="btn btn-outline-danger btn-sm" type='button'>Delete
                </button>
            </td>
        </tr>
    )
}

const ToDoList = ({todo_list, deleteToDo}) => {
    return (
        <div>
            <table className="todo-margin-top">
                <th>
                    Done
                </th>
                <th>
                    Name
                </th>
                <th>
                    Project
                </th>
                <th>
                    Description
                </th>
                <th>
                    Delete
                </th>
                {todo_list.map((todo) => <ToDoItem todo={todo} deleteToDo={deleteToDo}/>)}
                {/*{todo_list.map((todo) => <ToDoItem todo={todo}/>)}*/}
                {/*{todo_list.map((todo) => <ToDoItem todo={todo}/>)}*/}
                {/*{todo_list.map((todo) => <ToDoItem todo={todo}/>)}*/}
            </table>
            <a>
                <Link className="btn btn-outline-warning btn-sm" to='/todo_list/create'>Create ToDo</Link>
            </a>
        </div>
)
}


export default ToDoList