import React, { Component } from 'react'
import moment from 'moment';

export class StopWatch extends Component {

    state = {
        watchRunning: false,
        timer: '00:00:00',
        startTime: null,
        date: 'no-date',
        timeEntryPay: 0
    }


    getEntryPay = () => {
        const payRate = this.props.projectItem.payRate;
        const myMin = Math.floor(moment.duration(this.state.timer).asMinutes());
        const timeEntryPay = (payRate / 60) * myMin;
        
        return timeEntryPay;
    }



    startWatch = () => {
        const startTimestamp = moment();
        const startTime = moment().format('h:mma');
        const timerStart = startTimestamp.startOf("day");
        const startDate = startTimestamp.format('MMM/D/YYYY');

        this.setState((prevState) => ({
            ...prevState,
            watchRunning: true,
            startTime: startTime,
            date: startDate
        }));

        this.interval = setInterval(() => { 
            const timer = timerStart.add(1, 'second').format('HH:mm:ss');

            this.setState((prevState) => ({
                ...prevState,
                timer: timer
            }));
        }, 1000);   
    }



    stopWatch = () => {
        const date = this.state.date;
        const startTime = this.state.startTime;
        const stopTime = moment().format('h:mma');
        const timeEntryPay = this.getEntryPay();
        const {id} = this.props.projectItem;
        const totalTime = this.state.timer;

        this.props.addTimeEntry(id, date, startTime, stopTime, totalTime, timeEntryPay);
        
        clearInterval(this.interval);

        this.setState({ 
            watchRunning: false,
            timer: '00:00:00',
            startTimestamp: null,
            date: '',
            timeEntryPay: 0 
        }) 
    }




    render() {
        return (
            <div className='stopwatch-contain'>
                <p className='timer-txt'>{this.state.timer}</p>
                <button 
                    className='stopwatch-start' 
                    onClick={this.startWatch} 
                    style={{display: this.state.watchRunning === false ? 'block' : 'none'}}
                    >PUNCH-IN
                </button>
                <button 
                    className='stopwatch-stop' 
                    onClick={this.stopWatch} 
                    style={{display: this.state.watchRunning === true ? 'block' : 'none'}}
                    >PUNCH-OUT
                </button>
            </div>
        )
    }
}

export default StopWatch
