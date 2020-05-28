import React, { Component } from 'react';
import PunchIn from './PunchIn';
import PropTypes from 'prop-types';



export class PunchInLoop extends Component {
    render() {

    return this.props.projects.map((project) => (
            <PunchIn key={project.id} projectItem={project}/>
            ))
            
    }
}


PunchInLoop.propTypes = {
    projects: PropTypes.array.isRequired
}

export default PunchInLoop
