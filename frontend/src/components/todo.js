import React from 'react'
import {HashRouter, Link} from "react-router-dom";


const ToDoItem = ({todo, users, projects, deleteToDo}) => {
    return (
        <tr>
            <td>
                {todo.is_active ? 'yes':'no'}
            </td>
            <td>
                {todo.name}
            </td>
            <td>
                {todo.description_todo}
            </td>
            <td>
                {/*{todo.project}*/}
                {todo.project.map((projectId)=>{
                    let project = projects.find((project)=>project.id == projectId)
                    if (project) {
                        return project.name
                    }
                })}
            </td>
            <td>
                {/*{todo.users + ' , '}*/}
                {todo.users.map((userId)=>{
                    let user = users.find((user)=>user.id == userId)
                    if (user) {
                        return user.username + ', '
                    }
                })}
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

const ToDoList = ({todo_list, users, projects, deleteToDo}) => {
    return (
        <div>
            <table className="todo-margin-top">
                <th>
                    Active
                </th>
                <th>
                    Name
                </th>
                <th>
                    Description
                </th>
                <th>
                    Project
                </th>
                <th>
                    Users
                </th>
                <th>
                    Delete
                </th>
                {todo_list.map((todo) => <ToDoItem todo={todo} users={users} projects={projects} deleteToDo={deleteToDo}/>)}
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