import React, { Component } from 'react'
import moment from 'moment';

export class StopWatch extends Component {

    state = {
        watchRunning: false,
        timer: '00:00:00',
        startTimestamp: null
    }

    startWatch = () => {
        const startClock = moment();
        this.setState({ 
            watchRunning: true, 
            timer: this.state.timer, 
            startTimestamp: startClock 
        });

        const timerStart = startClock.startOf("day")

        this.interval = setInterval(() => { 
            const timer = timerStart.add(1, 'second').format('HH:mm:ss');
            
            this.setState({ 
                watchRunning: true,
                timer: timer, 
                startTimestamp: startClock 
            });
        
        }, 1000);   
    }

    stopWatch = () => {
        this.setState((prevState) => ({
            ...prevState,
            watchRunning: false
        }));

        clearInterval(this.interval);

        this.addNewEntry();
    }

    /*
{ id: uuidv4(),
    date: '1/1/2020',
    timeStart: '8:35',
    timeEnd: '9:35',
    timeEntryTotal: '1:00:00',
    timeEntryPay: 50
},
*/
    addNewEntry = () => {
        // construct the object
        // send er up
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
