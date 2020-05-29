import React, { Component } from 'react';
import PunchIn from './PunchIn';
import PropTypes from 'prop-types';



export class PunchInLoop extends Component {
    render() {
    
    return this.props.projects
                .filter(project => project.id === this.props.viewCaller)
                .map((project) => (
                <PunchIn key={project.id} projectItem={project} viewCaller={this.props.viewCaller}/>
            ))
    }
}




PunchInLoop.propTypes = {
    projects: PropTypes.array.isRequired
}

export default PunchInLoop
