import React from 'react'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.is_active}
            </td>
            <td>
                {project.name}
            </td>
            <td>
                {project.description_project}
            </td>
            <td>
                {project.owner}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table className= "todo-margin-top">
            <th>
                Done
            </th>
            <th>
                Name
            </th>
            <th>
                Description
            </th>
            <th>
                Owner
            </th>
            {projects.map((project) => <ProjectItem project={project}/>)}
            {projects.map((project) => <ProjectItem project={project}/>)}
            {projects.map((project) => <ProjectItem project={project}/>)}
            {projects.map((project) => <ProjectItem project={project}/>)}
        </table>
    )
}


export default ProjectList