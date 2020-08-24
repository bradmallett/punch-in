import React, { Component } from 'react';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';

import {convertTimeIntoString} from '../../helpers';

export class TimeEntry extends Component {
    delTimeEntryItem = () => this.props.delTimeEntry(this.props.projID, this.props.entryItem.id);

    render() {
        const {
            color,
            entryItem: {
                date,
                timeStart,
                timeEnd,
                timeEntryTotal,
                timeEntryPay
            }
        } = this.props;

        return (
        <div className='punchIns-wrapper'>

                <div className='punchIn-entry-contain'>

                    <div className='entry-white-contain'>
                        <div className='colorContainIcon' style={{backgroundColor: color}}>
                            <EventOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                        </div>
                        <p className='entry-text'>{date}</p>
                    </div>
                    
                    <div className='entry-white-contain-time'>
                        <div className='colorContainIcon' style={{backgroundColor: color}}>
                            <QueryBuilderOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                        </div>
                        <p className='entry-text'>{timeStart} - {timeEnd} | {convertTimeIntoString(timeEntryTotal)}</p>
                    </div>

                    <div className='entry-white-contain'>
                        <div className='colorContainIcon' style={{backgroundColor: color}}>
                            <AttachMoneyOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                        </div>
                    <p className='entry-text'>{`$${timeEntryPay}`}</p>
                    </div>

                    <div className='entryDelete-contain'>

                        <Tooltip TransitionComponent={Zoom} title="Delete Time Entry" arrow>
                            <IconButton onClick={this.delTimeEntryItem}>
                                <DeleteOutlineOutlinedIcon className='time-entry-delete-icon' style={delIconStyle}/>
                            </IconButton>
                        </Tooltip>
                    </div>

                </div>
            </div>
        )
    }
}



const delIconStyle = {
    fontSize: '2.7rem',
}

export default TimeEntry




