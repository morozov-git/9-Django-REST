import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from './components/user.js'
import ToDoList from './components/todo.js'
import ProjectList from './components/project.js'
import MenuFixed from './components/menu.js'
import Footer from './components/footer.js'
import NotFound404 from "./components/NotFound404.js";
import axios from 'axios'
import {HashRouter, Route, BrowserRouter, Link, Switch, Redirect} from 'react-router-dom'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'todo_list': [],
            'projects': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                const todo_list = response.data
                this.setState(
                    {
                        'todo_list': todo_list
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/')
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))
        }


    render() {
        return (
            <div className="full_page">
                <MenuFixed/>
                {/*<UserList users={this.state.users}/>*/}
                <HashRouter>
                    {/*<nav>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link to='/'>Users</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to='/todo_list'>ToDo List</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to='/projects'>Projects</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>} />
                        <Route exact path='/todo_list' component={() => <ToDoList todo_list={this.state.todo_list}/>} />
                        <Route exact path='/projects' component={() =><ProjectList projects={this.state.projects}/>} />

                        <Redirect from='/users' to='/' />
                        <Route component={NotFound404} />
                    </Switch>

                </HashRouter>

                <Footer/>
            </div>
        )
    }
}


export default App;

