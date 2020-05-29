import React, { Component } from 'react';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


export class TimeEntry extends Component {

    render() {
        const {id, date, timeStart, timeEnd, timeEntryTotal, timeEntryPay} = this.props.entryItem;
        const {color} = this.props;

        return (
        <div className='punchIns-wrapper'>

                <div className='punchIn-entry-contain'>

                    <div className='entry-white-contain'>
                        <div className='colorContainIcon' style={{backgroundColor: color}}>
                            <EventOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                        </div>
                        <p className='entry-text'>{date}</p>
                    </div>
                    <div className='entry-white-contain'>
                        <div className='colorContainIcon' style={{backgroundColor: color}}>
                            <QueryBuilderOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                        </div>
                        <p className='entry-text'>{timeStart} - {timeEnd} | Time: {timeEntryTotal}</p>
                    </div>

                    <div className='entry-white-contain'>
                        <div className='colorContainIcon' style={{backgroundColor: color}}>
                            <EventOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                        </div>
                        <p className='entry-text'>$55.00</p>
                    </div>

                    <div className='entryDelete-contain'>
                        <DeleteOutlineOutlinedIcon className='time-entry-delete-icon' style={delIconStyle}/>
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




