import React from 'react'


const ToDoItem = ({todo}) => {
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
            <td>
                {todo.owner}
            </td>
        </tr>
    )
}

const ToDoList = ({todo_list}) => {
    return (
        <table className= "todo-margin-top">
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
                Owner
            </th>
            {todo_list.map((todo) => <ToDoItem todo={todo}/>)}
            {todo_list.map((todo) => <ToDoItem todo={todo}/>)}
            {todo_list.map((todo) => <ToDoItem todo={todo}/>)}
            {todo_list.map((todo) => <ToDoItem todo={todo}/>)}
        </table>
    )
}


export default ToDoList