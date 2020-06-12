import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Projects from './components/viewProjects/Projects';
import AddProject from './components/viewProjects/AddProject';
import PunchInLoop from './components/viewPunchin/PunchInLoop';
import {fetchProjects} from './services/fetch-projects';
import moment from 'moment';



class App extends Component {

  state = {
    projects: [],
    stopwatch: {
        watchRunning: false,
        timer: '00:00:00',
        startTime: null,
        date: 'no-date',
        timeEntryPay: 0
    }
  }



  startWatch = () => {
    const startTimestamp = moment();
    const startTime = moment().format('h:mma');
    const timerStart = startTimestamp.startOf("day");
    const startDate = startTimestamp.format('MMM/D/YYYY');

    this.setState((prevState) => ({
        ...prevState,
        stopwatch: {
          watchRunning: true,
          timer: '00:00:00',
          startTime: startTime,
          date: startDate,
          timeEntryPay: 0
        }
    }));

    this.interval = setInterval(() => { 
        const timer = timerStart.add(1, 'second').format('HH:mm:ss');

        this.setState((prevState) => ({
            ...prevState,
            stopwatch: {
              watchRunning: true,
              timer: timer,
              startTime: startTime,
              date: startDate,
              timeEntryPay: 0
            }
        }));
    }, 1000);   
}





stopWatch = (id, payRate) => {
  const date = this.state.stopwatch.date;
  const startTime = this.state.stopwatch.startTime;
  const stopTime = moment().format('h:mma');
  const timeEntryPay = this.getEntryPay(payRate);
  const totalTime = this.state.stopwatch.timer;

  this.addTimeEntry(id, date, startTime, stopTime, totalTime, timeEntryPay);
  
  clearInterval(this.interval);

  this.setState((prevState) => ({
    ...prevState,
    stopwatch: {
      watchRunning: false,
      timer: '00:00:00',
      startTime: null,
      date: 'no-date',
      timeEntryPay: 0
    }
  }));
}


    getEntryPay = (payRate) => {
        const myMin = Math.floor(moment.duration(this.state.timer).asMinutes());
        const timeEntryPay = (payRate / 60) * myMin;
        
        return timeEntryPay;
    }




  async componentDidMount() {
    const projects = await fetchProjects();

    this.setState({projects});
  }

  addProject = (title, payRate, color) => {
    this.setState({ projects: [{
      id: uuidv4(),
      title,
      payRate,
      color,
      punchIns: 0,
      totalTime: '00:00:00',
      totalPay: 0,
      notes: '',
      timeEntries: []
    }, ...this.state.projects] }) 
  }


  noProjStyle = () => {
    return {
        color: '#6b6b6b',
        textAlign: 'center',
        display: this.state.projects.length > 0 ? 'none' : 'block',
        margin: '0px 20px 50px'
    }
  }


  addNotes = (id, notes) => {
    const index = this.state.projects.map((project) => project.id).indexOf(id);
    const newProj = this.state.projects[index];
    newProj.notes = notes;
    const newProjects = [...this.state.projects];
    newProjects[index] = newProj;

    this.setState({ projects: newProjects })
  }


  addTimeEntry = (id, date, start, stop, totalTime, totalPay) => {
    const newProjects = [...this.state.projects];
    const index = this.state.projects.map((project) => project.id).indexOf(id);
    const newProj = this.state.projects[index];
    const newTimeEntry = {
      id: uuidv4(),
      date, 
      timeStart: start, 
      timeEnd: stop, 
      timeEntryTotal: totalTime, 
      timeEntryPay: totalPay
    }

    newProj.timeEntries = [newTimeEntry, ...newProj.timeEntries];
    newProjects[index] = newProj;
    this.setState({ projects: newProjects })
  }


  delProjItem = (id) => {
    this.setState({ projects: [...this.state.projects
      .filter((project) => project.id !== id ) ]} 
    )
  }


  delTimeEntry = (projID, entryID) => {
    const newProjects = [...this.state.projects];
    const index = this.state.projects.map((project) => project.id).indexOf(projID);
    const newProj = newProjects[index];
    const newEntries = newProj.timeEntries.filter(entry => entry.id !== entryID);
   
    newProj.timeEntries = newEntries;
    newProjects[index] = newProj;
    this.setState({ projects: newProjects })
  }


  render() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

            {/* ALL PROJECTS LISTING */}
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddProject addProject={this.addProject}/>
                <div style={this.noProjStyle()}>
                  <h1>NO CURRENT PROJECTS</h1>
                  <p>- ADD PROJECTS ABOVE -</p>
                </div>
                <Projects projects={this.state.projects} delProjItem={this.delProjItem}/>
              </React.Fragment>
            )} />

            {/* PROJECT DETAILS PAGE */}
            <Route path='/punchin/:projectID' render={props => (
              <React.Fragment>
                <PunchInLoop  
                  props={props} 
                  projects={this.state.projects} 
                  addNotes={this.addNotes} 
                  delTimeEntry={this.delTimeEntry}
                  delProjItem={this.delProjItem}
                  startWatch={this.startWatch}
                  stopWatch={this.stopWatch}
                  watchRunning={this.state.stopwatch.watchRunning}
                  timer={this.state.stopwatch.timer}
                />
              </React.Fragment>
            )} />

        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;



