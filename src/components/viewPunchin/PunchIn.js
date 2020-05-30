import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeEntriesLoop from './TimeEntriesLoop';
import { v4 as uuidv4 } from 'uuid';
import ViewProjTopBar from './ViewProjTopBar';
import ViewProjTitleBar from './ViewProjTitleBar';
import ViewProjTotalsBox from './ViewProjTotalsBox';


export class PunchIn extends Component {

    state = {
        project: {
                timeEntries: [{
                    id: uuidv4(),
                    date: '1/1/2020',
                    timeStart: '8:35',
                    timeEnd: '9:35',
                    timeEntryTotal: '1:00:00',
                    timeEntryPay: 50
                },
                {
                    id: uuidv4(),
                    date: '1/2/2020',
                    timeStart: '9:35',
                    timeEnd: '11:35',
                    timeEntryTotal: '2:00:00',
                    timeEntryPay: 100
                },
                {
                    id: uuidv4(),
                    date: '1/3/2020',
                    timeStart: '8:35',
                    timeEnd: '11:35',
                    timeEntryTotal: '3:00:00',
                    timeEntryPay: 150
                }
            ],
            notes: 'My notes'
        }
      }


    render() {
        const {title, color, payRate, punchIns, totalTime, totalPay} = this.props.projectItem;
        

        return (
            <div className='projectContain-PunchIn-Edit'>

            <ViewProjTopBar projectItem={this.props.projectItem}/>

            <ViewProjTitleBar projectItem={this.props.projectItem}/>

            <TimeEntriesLoop timeEntries={this.state.project.timeEntries} color={color}/>

            <ViewProjTotalsBox projectItem={this.props.projectItem}/>

            </div>
        )
    }
}


PunchIn.propTypes = {
    projectItem: PropTypes.object.isRequired
}

export default PunchIn
