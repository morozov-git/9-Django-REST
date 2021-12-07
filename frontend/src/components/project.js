import React from 'react'
import {Link} from "react-router-dom";


const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                {/*{project.is_active}*/}
                {project.is_active ? 'Yes' : 'No'}
            </td>
            <td>
                {project.name}
            </td>
            <td>
                {project.description_project}
            </td>
            {/*<td>*/}
            {/*    {project.owner}*/}
            {/*</td>*/}
            <td>
                <button onClick={() => deleteProject(project.id)} className="btn btn-outline-danger btn-sm"
                        type='button'>Delete
                </button>
            </td>
        </tr>
    )
}

const ProjectList = ({projects, deleteProject}) => {
    return (
        <div>
            <table className="todo-margin-top">
                <th>
                    Active
                </th>
                <th>
                    Name
                </th>
                <th>
                    Description
                </th>
                <th>
                    Delete
                </th>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}
                {/*{projects.map((project) => <ProjectItem project={project}/>)}*/}
                {/*{projects.map((project) => <ProjectItem project={project}/>)}*/}
                {/*{projects.map((project) => <ProjectItem project={project}/>)}*/}
            </table>
            <a>
                <Link className="btn btn-outline-warning btn-sm" to='/project/create'>Create Project</Link>
            </a>
        </div>
    )
}


export default ProjectList