import React, { Component } from 'react'

export class StopWatch extends Component {

    startTheWatch = () => this.props.startWatch(this.props.projectItem.id);

    stopTheWatch = () => this.props.stopWatch(this.props.projectItem.id, this.props.projectItem.payRate);

    showStopWatch = (id) => {
        if(!this.props.watchRunning) {
            return {display: 'flex'};
        }
        else {
            return this.props.projectItem.id === id ? {display: 'flex'} : {display: 'none'};
        }
    }

    noStopWatchMessage = (id) => {
        return this.props.watchRunning === true && this.props.projectItem.id !== id ? {display: 'block'} : {display: 'none'};
    }


    render() {
        return (
            <React.Fragment>
                <div className='stopwatch-contain' style={this.showStopWatch(this.props.stopwatchID)}>
                    <p className='timer-txt'>{this.props.timer}</p>
                    <button 
                        className='stopwatch-start' 
                        onClick={this.startTheWatch} 
                        style={{display: this.props.watchRunning === false ? 'block' : 'none'}}
                        >PUNCH-IN
                    </button>
                    <button 
                        className='stopwatch-stop' 
                        onClick={this.stopTheWatch} 
                        style={{display: this.props.watchRunning === true ? 'block' : 'none'}}
                        >PUNCH-OUT
                    </button>
                </div>
                <div className='noStopMsg' style={this.noStopWatchMessage(this.props.stopwatchID)}>
                    <p className='noStopMsgTxt'>CURRENTLY PUNCHED-IN ON ANOTHER PROJECT</p>
                </div>
            </React.Fragment>
        )
    }
}

export default StopWatch


