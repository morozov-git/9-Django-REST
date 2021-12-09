import React from 'react'
import {Link, Route} from "react-router-dom";
import LoginForm from "./Auth";
import { useParams } from 'react-router-dom'
// import LoginForm from "./Auth";
// import axios from 'axios'
// import {HashRouter, Route, BrowserRouter, Link, Switch, Redirect} from 'react-router-dom'



class MenuFixed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description_project: '',
            is_active: true,
            search: '',
            url: '',
        }
    }





    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        // console.log([event.target.name], event.target.value);
    }

    handleSubmit(event) {
        this.state.url  = event.target.baseURI
        console.log(this.state.search + ' ' + this.state.url)

        this.props.searchFilter(this.state.search, this.state.url)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">TO-DO list</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
                                    <a className="nav-link active" aria-current="page" href='/'>Users</a>
                                </li>
                                <li className="nav-item">
                                    {/*<a className="nav-link" href="#">ToDoName</a>*/}
                                    <a className="nav-link active" aria-current="page" href='/todo_list'>ToDo List</a>
                                </li>
                                <li className="nav-item">
                                    {/*<a className="nav-link" href="#">ProjectName</a>*/}
                                    <a className="nav-link active" aria-current="page" href='/projects'>Projects</a>
                                </li>
                                <li className="nav-item">

                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01"
                                       data-bs-toggle="dropdown" aria-expanded="false">UserName</a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                        <li><a className="dropdown-item" href="#">ToDo</a></li>
                                        <li><a className="dropdown-item" href="#">Projects</a></li>
                                        <li><a className="dropdown-item" href="#">Profile</a></li>

                                        {/*<Route path='/login' component={() =><LoginForm/>}/>*/}

                                        {/*<li><a className="dropdown-item disabled" href="#">Logout</a></li>*/}


                                    </ul>
                                </li>

                            </ul>
                            <form className="d-flex" onSubmit={(event) => this.handleSubmit(event)}>
                                {/*<input className="form-control me-2" placeholder="Search"*/}
                                {/*       name="search" type="text" value={this.state.search}/>*/}
                                <div>
                                    <input type="text"
                                           className="form-control me-2"
                                           name="search"
                                           value={this.state.search}
                                           aria-describedby="inputGroup-sizing-sm"
                                           placeholder="Search"
                                           onChange={(event) => this.handleChange(event)}
                                    />
                                </div>


                                <input type="submit" className="btn btn-outline-success" value="Search"/>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MenuFixed