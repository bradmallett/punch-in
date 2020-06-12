import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeEntriesLoop from './TimeEntriesLoop';
import ViewProjTopBar from './ViewProjTopBar';
import ViewProjTitleBar from './ViewProjTitleBar';
import ViewProjTotalsBox from './ViewProjTotalsBox';
import Notes from './Notes';
import StopWatch from './StopWatch';


export class PunchIn extends Component {

    render() {
        const {color, id} = this.props.projectItem;

        return (
            <div className='projectContain-PunchIn-Edit'>

            <ViewProjTopBar projectItem={this.props.projectItem} delProjItem={this.props.delProjItem}/>

            <ViewProjTitleBar projectItem={this.props.projectItem}/>

            <StopWatch projectItem={this.props.projectItem} addTimeEntry={this.props.addTimeEntry}/>

            <TimeEntriesLoop 
                timeEntries={this.props.projectItem.timeEntries} 
                color={color} 
                delTimeEntry={this.props.delTimeEntry}
                projID={id}
            />

            <ViewProjTotalsBox projectItem={this.props.projectItem}/>

            <Notes projectItem={this.props.projectItem} addNotes={this.props.addNotes}/>

            </div>
        )
    }
}


PunchIn.propTypes = {
    projectItem: PropTypes.object.isRequired,
    addNotes: PropTypes.func.isRequired
}

export default PunchIn
