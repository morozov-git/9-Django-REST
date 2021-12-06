import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from './components/user.js'
import ToDoList from './components/todo.js'
import ToDoForm from "./components/todoform";
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







    createToDo(name, description_todo, users, project){
        const headers = this.get_headers()
        const data = {name: name, description_todo:description_todo, users:[users], project:[project]}
        console.log(data)
        axios.post(`http://127.0.0.1:8000/api/todo/`, data, {headers})
            .then(response => {
                // this.setState(
                //     {
                //         'todo_list': this.state.todo_list.filter((todo) => todo.id !=id)
                //     }
                // )
                this.load_data()
            }).catch(error => {
                console.log(error)
                this.setState({users:[]})
            })
    }



    deleteToDo(id){
        const headers = this.get_headers()
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`, {headers})
            .then(response => {
                // this.setState(
                //     {
                //         'todo_list': this.state.todo_list.filter((todo) => todo.id !=id)
                //     }
                // )
                this.load_data()
            }).catch(error => {
                console.log(error)
                this.setState({users:[]})
            })
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
            }).catch(error => {
                console.log(error)
                this.setState({users:[]})
            })


        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                // const todo_list = response.data
                const todo_list = response.data.results.filter(
                    (item) => item.is_close !=true
                )
                this.setState(
                    {
                        // 'todo_list': todo_list.results
                        'todo_list': todo_list
                    }
                )
            }).catch(error => {
                console.log(error)
                this.setState({todo_lis:[]})
            })



        axios.get('http://127.0.0.1:8000/api/project/', {headers})
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects.results
                    }
                )
            }).catch(error => {
                console.log(error)
                this.setState({projects:[]})
            })
    }


    is_auth() {
        return this.state.token != ''
        // return !!this.state.token
    }

    logout() {
        this.set_token('')
        this.setState({
            'users': [],
            'todo_list': [],
            'projects': [],
            'token': '',
        })
    }

    set_token(token) {
        let cookies = new Cookies()
        cookies.set('token', token)
        // console.log('token', token)
        // this.setState({'token': token}, ()=>this.load_data())
        localStorage.setItem('token', token)
    }


    get_token(username, password) {
        console.log(username, password)
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                console.log(response.data)
                this.set_token(response.data['token'])
                console.log(response.data['token'])
                window.location.href = '/'
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
            headers['Authorization'] = 'Token'+ ' ' + this.state.token
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
                    {this.is_auth() ? <Link className="dropdown-item" onClick={() => this.logout()}> Logout</Link>:
                                        <Link className="dropdown-item" to='/login'>Login</Link>
                                    }
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
                        <Route exact path='/'
                               component={() => <UserList
                                   users={this.state.users}/>}/>
                        <Route exact path='/todo_list'
                               component={() => <ToDoList
                                   todo_list={this.state.todo_list}
                                   deleteToDo={(id)=>this.deleteToDo(id)}
                               />}/>

                       <Route exact path='/todo_list/create'
                                component={() => <ToDoForm
                                   createToDo={(name, description_todo, users, project) => this.createToDo(name, description_todo, users, project)}
                                   // deleteToDo={(id)=>this.deleteToDo(id)}
                                    />}/>

                        <Route exact path='/projects'
                               component={() => <ProjectList
                                   projects={this.state.projects}/>}/>
                        <Route path='/project/:id'>
                            {/*<ToDoList_Project todo_list={this.state.todo_list}/>}/>*/}
                        </Route>

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

