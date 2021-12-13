import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from './components/user.js'
import ToDoList from './components/todo.js'
import ToDoForm from "./components/todoform";
import ProjectList from './components/project.js'
import ProjectForm from "./components/projectform";
// import MenuFixed from './components/menu.js'
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
            'username':'',
            'users': [],
            'todo_list': [],
            'projects': [],
            'token': '',
            'search': '',
        }
    }

    createToDo(name, description_todo, users, project) {
        const headers = this.get_headers()
        const data = {name: name, description_todo: description_todo, users: users, project: project}
        console.log(data)
        axios.post(`http://127.0.0.1:8000/api/todo/`, data, {headers})
            .then(response => {
                this.load_data()
            }).catch(error => {
            console.log(error)
            this.setState({users: []})
        })
    }

    createProject(name, description_project, users) {
        const headers = this.get_headers()
        const data = {name: name, description_project: description_project, users: users}
        console.log(data)
        axios.post(`http://127.0.0.1:8000/api/project/`, data, {headers})
            .then(response => {
                this.load_data()
            }).catch(error => {
            console.log(error)
            this.setState({users: []})
        })
    }

    deleteToDo(id) {
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
            this.setState({users: []})
        })
    }


    deleteProject(id) {
        const headers = this.get_headers()
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/api/project/${id}`, {headers})
            .then(response => {
                this.load_data()
            }).catch(error => {
            console.log(error)
            this.setState({users: []})
        })
    }

    searchFilter(event){
        this.state.url  = event.target.baseURI
        console.log(this.state.search + ' ' + this.state.url)
        let url = this.state.url
        let search = this.state.search

        const headers = this.get_headers()
        if (url.indexOf('projects') !== -1){
            // console.log('project');
            const projects = this.state.projects.filter(
                    (item) => item.name.indexOf(search) !== -1 || item.description_project.indexOf(search) !== -1)
            console.log(projects);
            this.setState(
                    {
                        'projects': projects
                    })
        } else if (url.indexOf('todo_list') !== -1){
            // console.log('todo_list');
            const todo_list = this.state.todo_list.filter(
                    (item) => item.name.indexOf(search) !== -1 || item.description_todo.indexOf(search) !== -1)
            console.log(todo_list);
            this.setState(
                    {
                        'todo_list': todo_list
                    })
        }
        event.preventDefault()
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
            this.setState({users: []})
        })


        axios.get('http://0.0.0.0:8000/api/todo/', {headers})
            .then(response => {
                // const todo_list = response.data
                const todo_list = response.data.results.filter(
                    (item) => item.is_close != true
                )
                this.setState(
                    {
                        // 'todo_list': todo_list.results
                        'todo_list': todo_list
                    }
                )
            }).catch(error => {
            console.log(error)
            this.setState({todo_lis: []})
        })


        axios.get('http://0.0.0.0:8000/api/project/', {headers})
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects.results
                    }
                )
            }).catch(error => {
            console.log(error)
            this.setState({projects: []})
        })
    }


    is_auth() {
        return this.state.token != ''
        // return !!this.state.token
    }

    logout() {
        this.set_token('')
        this.setState({
            'username':'',
            'users': [],
            'todo_list': [],
            'projects': [],
            'token': '',
            'search': '',
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
        axios.post('http://0.0.0.0:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                // console.log(response.data)
                // console.log(username)
                // this.setState({'username': username})
                // console.log(this.state.username)
                // console.log(response.config.data)
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
            'Content-Type': 'application/json',
            'Accept': 'application/json',

        }
        if (this.is_auth()) {
            headers['Authorization'] = 'Token' + ' ' + this.state.token
        }
        return headers
    }


    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
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
                <div className="menu-fixed">
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
                                    <a className="nav-link active" aria-current="page" href='/#'>Users</a>
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
                            <form className="d-flex" onSubmit={(event) => this.searchFilter(event)}>
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
                {/*<MenuFixed/>*/}
                {/*<UserList users={this.state.users}/>*/}

                <HashRouter>

                    {/*<MenuFixed/>*/}

                    {this.is_auth() ? <Link className="dropdown-item" onClick={() => this.logout()}> Logout</Link> :
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
                                   users={this.state.users}
                                   projects={this.state.projects}
                                   deleteToDo={(id) => this.deleteToDo(id)}
                               />}/>

                        <Route exact path='/todo_list/create'
                               component={() => <ToDoForm
                                   createToDo={(name, description_todo, users, project) => this.createToDo(name, description_todo, users, project)}
                                   users={this.state.users}
                                   projects={this.state.projects}

                                   // deleteToDo={(id)=>this.deleteToDo(id)}
                               />}/>

                        {/*<Route exact path='/search'*/}
                        {/*       component={() => <searchFilter*/}
                        {/*           searchFilter={(search, url) => this.searchFilter(search, url)}*/}
                        {/*           search={this.state.search}*/}
                        {/*           url={this.state.url}*/}
                        {/*       />}/>*/}

                        <Route exact path='/projects'
                               component={() => <ProjectList
                                   projects={this.state.projects}
                                   users={this.state.users}
                                   deleteProject={(id) => this.deleteProject(id)}
                               />}/>

                        <Route exact path='/project/create'
                               component={() => <ProjectForm
                                   createProject={(name, description_project, users) => this.createProject(name, description_project, users)}
                                   users={this.state.users}
                               />}/>
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






