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
import LoginForm from "./components/Auth";
import Cookies from 'universal-cookie';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'todo_list': [],
            'projects': [],
            'token': '',
        }
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users.results
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                const todo_list = response.data
                this.setState(
                    {
                        'todo_list': todo_list.results
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/', {headers})
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects.results
                    }
                )
            }).catch(error => console.log(error))
    }


    is_auth() {
        // return this.state.token != ''
        return !!this.state.token
    }

    logout() {
        this.set_token('')
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())

    }


    get_token(username, password) {
        console.log(username, password)
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                console.log(response.data)
                this.set_token(response.data['token'])

                // // Вариант для LocalStorage
                // console.log(response.data)
                // localStorage.setItem('token', response.data.token)
                // let token = localStorage.getItem('token')
                // console.log(token)

                // // Вариант для Cookie
                // const cookies = new Cookies()
                // cookies.set('token', token)
                // this.setState()

            }).catch(error => console.log('Неверный логин или пароль'))
    }


    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_auth()) {
            headers['Authorization'] = 'token' + this.state.token
        }
        return headers
    }


    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    componentDidMount() {
        // this.load_data()
        this.get_token_from_storage()
        // axios.get('http://127.0.0.1:8000/api/users/')
        //     .then(response => {
        //         const users = response.data
        //         this.setState(
        //             {
        //                 'users': users.results
        //             }
        //         )
        //     }).catch(error => console.log(error))
        //
        // axios.get('http://127.0.0.1:8000/api/todo/')
        //     .then(response => {
        //         const todo_list = response.data
        //         this.setState(
        //             {
        //                 'todo_list': todo_list.results
        //             }
        //         )
        //     }).catch(error => console.log(error))
        //
        // axios.get('http://127.0.0.1:8000/api/project/')
        //     .then(response => {
        //         const projects = response.data
        //         this.setState(
        //             {
        //                 'projects': projects.results
        //             }
        //         )
        //     }).catch(error => console.log(error))
    }


    render() {
        return (
            <div className="full_page">
                {/*<MenuFixed/>*/}
                {/*<UserList users={this.state.users}/>*/}

                <HashRouter>
                    <MenuFixed/>

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

                    {/*<Link to='/login'>Login</Link>*/}

                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/todo_list' component={() => <ToDoList todo_list={this.state.todo_list}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route path='/project/:id'>
                            {/*<ToDoList_Project todo_list={this.state.todo_list}/>}/>*/}
                        </Route>

                        {/*<Route path='/login' component={() =><LoginForm/>}/>*/}

                        <Route path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>

                        <Redirect from='/users' to='/'/>
                        <Route component={NotFound404}/>
                    </Switch>

                </HashRouter>

                <Footer/>
            </div>
        )
    }
}


export default App;

