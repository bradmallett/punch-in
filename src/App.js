import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Projects from './components/viewProjects/Projects';
import AddProject from './components/viewProjects/AddProject';
import PunchInLoop from './components/viewPunchin/PunchInLoop';
import * as projectsService from './services/projects-service';
import moment from 'moment';

class App extends Component {

  state = {
    projects: [],
    stopwatch: {
        id: '',
        watchRunning: false,
        timer: '00:00:00',
        startTime: null,
        date: 'no-date',
        timeEntryPay: 0
    }
  }

  async componentDidMount() {
    const projects = await projectsService.fetchProjects();

    this.setState({projects});
  }

  startWatch = (id) => {
    const startTimestamp = moment();
    const startTime = moment().format('h:mma');
    const timerStart = startTimestamp.startOf("day");
    const startDate = startTimestamp.format('MMM/D/YYYY');

    this.setState((prevState) => ({
        ...prevState,
        stopwatch: {
          id,
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
              id,
              watchRunning: true,
              timer,
              startTime: startTime,
              date: startDate,
              timeEntryPay: 0
            }
        }));
    }, 1000);   
  }

  getEntryPay = (payRate) => {
    const timeEntryDurationInMinutes = Math.floor(moment.duration(this.state.stopwatch.timer).asMinutes());
    const timeEntryPay = (payRate / 60) * timeEntryDurationInMinutes;
    
    return (Math.round(timeEntryPay * 100) / 100).toFixed(2);
  }

  stopWatch = (projectId, payRate) => {
    const date = this.state.stopwatch.date;
    const startTime = this.state.stopwatch.startTime;
    const stopTime = moment().format('h:mma');
    const timeEntryPay = this.getEntryPay(payRate);
    const totalTime = this.state.stopwatch.timer;

    this.addTimeEntry(projectId, date, startTime, stopTime, totalTime, timeEntryPay);
    
    clearInterval(this.interval);

    this.setState((prevState) => ({
      ...prevState,
      stopwatch: {
        id: '',
        watchRunning: false,
        timer: '00:00:00',
        startTime: null,
        date: 'no-date',
        timeEntryPay: 0
      }
    }));
  }

  addTimeEntry = async (projectId, date, start, stop, totalTime, totalPay) => {
    const newMoment = moment(moment.duration(totalTime));
    const totalSeconds = Math.round(newMoment._i._milliseconds / 1000);
    const timeEntry = {
      date, 
      timeStart: start, 
      timeEnd: stop, 
      timeEntryTotal: totalSeconds, 
      timeEntryPay: totalPay
    };

    try {
      const updatedProject = await projectsService.addTimeEntryForProject(projectId, timeEntry);

      updatedProject.totalTime = moment.utc(totalSeconds * 1000).format("HH:mm:ss");

      const projectsCopy = [...this.state.projects];
      const alteredProjects = projectsCopy.map((project) => {
        if (project.id === projectId) {

          return updatedProject;
        }

        return project;
      });

      this.setState({projects: alteredProjects});

    } catch (error) {
      console.log('An error occurred adding the time entry.', error);
    }
  }

  addProject = async (title, payRate, color) => {
    const addedProject = await projectsService.addProject(title, payRate, color);

    this.setState((prevState) => ({
      projects: [addedProject, ...prevState.projects]
    }));
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

  delProjItem = async (id) => {
    try {
      await projectsService.deleteProject(id);

      const projectsCopy = [...this.state.projects];
      const updatedProjects = projectsCopy.filter((project) => project.id !== id);

      this.setState({projects: updatedProjects});
    } catch (err) {
      console.log('Failed to delete the project from the server.', err);
    }
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
                  stopwatchID={this.state.stopwatch.id}
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



