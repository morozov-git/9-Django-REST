import React from 'react'
import {Link} from "react-router-dom";


const MenuFixed = ({menu}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TO-DO list</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                                <a className="nav-link active" aria-current="page" href='/#/'>Users</a>
                            </li>
                            <li className="nav-item">
                                {/*<a className="nav-link" href="#">ToDoName</a>*/}
                                <a className="nav-link active" aria-current="page" href='/#/todo_list'>ToDo List</a>
                            </li>
                            <li className="nav-item">
                                {/*<a className="nav-link" href="#">ProjectName</a>*/}
                                <a className="nav-link active" aria-current="page" href='/#/projects'>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Login</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01"
                                   data-bs-toggle="dropdown" aria-expanded="false">UserName</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><a className="dropdown-item" href="#">ToDo</a></li>
                                    <li><a className="dropdown-item" href="#">Projects</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item disabled" href="#">Logout</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default MenuFixed