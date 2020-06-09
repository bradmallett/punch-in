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
        const {color} = this.props.projectItem;

        return (
            <div className='projectContain-PunchIn-Edit'>

            <ViewProjTopBar projectItem={this.props.projectItem}/>

            <ViewProjTitleBar projectItem={this.props.projectItem}/>

            <StopWatch projectItem={this.props.projectItem}/>

            <TimeEntriesLoop timeEntries={this.props.projectItem.timeEntries} color={color}/>

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
