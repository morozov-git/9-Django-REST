import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description_project: '',
            is_active: true,
            users: [],}
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


    handleSubmit(event) {
        console.log(this.state.name + ' ' + this.state.description_project + ' ' + this.state.users)

        this.props.createProject(this.state.name, this.state.description_project, this.state.users)
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

                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Description</span>
                    </div>
                    <input type="text"
                           className="form-control"
                           name="description_project"
                           value={this.state.description_project}
                           aria-describedby="inputGroup-sizing-sm"
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Users</span>
                    </div>

                    <select name="users" className='form-control' multiple onChange={(event) => this.handleUsersChange(event)}>
                        {this.props.users.map((item) => <option value={item.id}>{item.username}</option>)}
                    </select>

                </div>

                <input type="submit" className="btn btn-primary btn-sm" value="Save"/>

            </form>
        );
    }
}


export default ProjectForm
