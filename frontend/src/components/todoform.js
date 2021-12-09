import React from 'react'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description_todo: '',
            users: [],
            project: []}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        // console.log([event.target.name], event.target.value);
    }

    handleUsersChange(event){
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return ;
        }
        let users = []
        for(let i=0; i<event.target.selectedOptions.length; i++){
            users.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'users': users
        })
    }

    handleProjectChange(event){
        if (!event.target.selectedOptions) {
            this.setState({
                'project': []
            })
            return ;
        }
        let project = []
        for(let i=0; i<event.target.selectedOptions.length; i++){
            project.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'project': project
        })
    }

    handleSubmit(event) {
        console.log(this.state.name + ' ' + this.state.description_todo + ' ' + this.state.users + ' ' + this.state.project)

        this.props.createToDo(this.state.name, this.state.description_todo, this.state.users, this.state.project)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input type="text" className="form-control"
                           name="name" value={this.state.name}
                           aria-describedby="inputGroup-sizing-sm"
                           onChange={(event) => this.handleChange(event)}/>
                </div>


                {/*<div className="form-group">*/}
                {/*    <label htmlFor="description_todo">Description</label>*/}
                {/*    <input type="text" */}
                {/*           className="form-control" */}
                {/*           name="description_todo" */}
                {/*           value={this.state.description_todo}*/}
                {/*           onChange={(event) => this.handleChange(event)}/>*/}
                {/*</div>*/}

                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                    </div>
                    <input type="text"
                           className="form-control"
                           name="description_todo"
                           value={this.state.description_todo}
                           aria-describedby="inputGroup-sizing-sm"
                           onChange={(event) => this.handleChange(event)}/>
                </div>


                {/*<div className="form-group">*/}
                {/*    <label htmlFor="project">Project</label>*/}
                {/*    /!*<input type="number" className="form-control" name="project" value={this.state.project}*!/*/}
                {/*    /!*       onChange={(event) => this.handleChange(event)}/>*!/*/}
                {/*    <select name="projects" className='form-control' multiple onChange={(event) => this.handleProjectChange(event)}>*/}
                {/*        {this.props.projects.map((item) => <option value={item.id}>{item.name}</option>)}*/}
                {/*    </select>*/}
                {/*</div>*/}

                 <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Project</span>
                    </div>
                    <select name="projects" className='form-control' multiple onChange={(event) => this.handleProjectChange(event)}>
                        {this.props.projects.map((item) => <option value={item.id}>{item.name}</option>)}
                    </select>
                </div>



                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Users</span>
                    </div>
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="users">Users</label>*/}

                    <select name="users" className='form-control' multiple onChange={(event) => this.handleUsersChange(event)}>
                        {this.props.users.map((item) => <option value={item.id}>{item.username}</option>)}
                    </select>

                </div>


                <input type="submit" className="btn btn-primary btn-sm" value="Save"/>

                {/*<input type="text" name="name" placeholder="name" value={this.state.name}*/}
                {/*       onChange={(event) => this.handleChange(event)}/>*/}
                {/*<input type="description" name="description" placeholder="description" value={this.state.description_todo}*/}
                {/*       onChange={(event) => this.handleChange(event)}/>*/}
                {/*<input type="description" name="user" placeholder="user" value={this.state.user}*/}
                {/*       onChange={(event) => this.handleChange(event)}/>*/}
                {/*<input type="description" name="project" placeholder="project" value={this.state.project}*/}
                {/*       onChange={(event) => this.handleChange(event)}/>*/}
                {/*<input type="submit" value="Save"/>*/}
            </form>
        );
    }
}


export default ToDoForm
