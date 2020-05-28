import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

export class Projects extends Component {
    render() {
        return this.props.projects.map(project => (
                <ProjectItem  key={project.id} projectItem={project} delProjItem={this.props.delProjItem}/>
        ))
    }
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    delProjItem: PropTypes.func.isRequired
}

export default Projects
