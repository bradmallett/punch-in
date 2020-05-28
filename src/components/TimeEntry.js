import React, { Component } from 'react'

export class TimeEntry extends Component {

    render() {
        const {id, date, timeStart, timeEnd, timeEntryTotal, timeEntryPay} = this.props.entryItem;

        return (
        <div className='punchIns-wrapper'>
                <div className='punchIn-entry-contain'>
                    <div className='dateBox-contain'>
                        <div className='dateIcon-contain'>
                            <p>Date Icon</p>
                        </div>
                        <p>{date}</p>
                    </div>
                    <div className='timeBox-contain'>
                        <div className='timeIcon-contain'>
                            <p>Time Icon</p>
                        </div>
                        <p>{timeStart} - {timeEnd}</p>
                        <p>{timeEntryTotal}</p>
                    </div>
                    <div className='entryButtons-contain'>
                        <p>Play BTN</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimeEntry




