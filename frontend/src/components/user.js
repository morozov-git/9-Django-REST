import React from 'react'


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table className= "todo-margin-top">
            <th>
                ID
            </th>
            <th>
                UserName
            </th>
            <th>
                First Name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Email
            </th>
            {users.map((user) => <UserItem user={user}/>)}
            {users.map((user) => <UserItem user={user}/>)}
            {users.map((user) => <UserItem user={user}/>)}
            {users.map((user) => <UserItem user={user}/>)}
        </table>
    )
}


export default UserList