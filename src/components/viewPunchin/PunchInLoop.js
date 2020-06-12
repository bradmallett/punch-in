import React, { Component } from 'react';
import PunchIn from './PunchIn';
import PropTypes from 'prop-types';


export class PunchInLoop extends Component {
    render() {
        const { projectID } = this.props.props.match.params;

        return this.props.projects
            .filter((project) => `:${project.id}` === projectID )
            .map((projectItem) => (
                <PunchIn 
                    key={projectItem.id} 
                    projectItem={projectItem} 
                    addNotes={this.props.addNotes}
                    delTimeEntry={this.props.delTimeEntry}
                    delProjItem={this.props.delProjItem}
                    startWatch={this.props.startWatch}
                    stopWatch={this.props.stopWatch}
                    watchRunning={this.props.watchRunning}
                    timer={this.props.timer}
                />
            ))
    }
}


PunchInLoop.propTypes = {
    projects: PropTypes.array.isRequired,
    addNotes: PropTypes.func.isRequired
}

export default PunchInLoop

