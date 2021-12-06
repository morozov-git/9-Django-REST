import React from 'react'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', description_todo: '', user: 0, project: 0}
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
        console.log(this.state.name + ' ' + this.state.description_todo + ' ' + this.state.user + ' ' + this.state.project)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description_todo">Description</label>
                    <input type="text" className="form-control" name="description" value={this.state.description_todo}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="project">Project</label>
                    <input type="number" className="form-control" name="project" value={this.state.project}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="user">User</label>
                    <input type="number" className="form-control" name="user" value={this.state.user}
                           onChange={(event) => this.handleChange(event)}/>
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
