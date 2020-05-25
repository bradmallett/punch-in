import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export class Projects extends Component {
    render() {
        return this.props.projects.map(project => (
                <ProjectItem key={project.id} projectItem={project}/>
        ))
    }
}

export default Projects
