import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Projects from './components/viewProjects/Projects';
import AddProject from './components/viewProjects/AddProject';
import PunchInLoop from './components/viewPunchin/PunchInLoop';


class App extends Component {

  state = {
    projects: [{
            id: uuidv4(),
            title: `Redesign the Hub's homepage`,
            payRate: 50,
            color: '#f00000',
            punchIns: 2,
            totalTime: '5:33',
            totalPay: 339.76,
            notes: `Project 1 notes`,
            timeEntries: [
                { id: uuidv4(),
                  date: '1/1/2020',
                  timeStart: '8:35',
                  timeEnd: '9:35',
                  timeEntryTotal: '1:00:00',
                  timeEntryPay: 50
                },
                { id: uuidv4(),
                date: '1/2/2020',
                timeStart: '9:35',
                timeEnd: '11:35',
                timeEntryTotal: '2:00:00',
                timeEntryPay: 100
                }
              ]
          },
          
          {
            id: uuidv4(),
            title: `Feed Venus`,
            payRate: 50,
            color: '#000',
            punchIns: 2,
            totalTime: '5:33',
            totalPay: 339.76,
            notes: 'Project 2 notes',
            timeEntries: [
                { id: uuidv4(),
                  date: '1/12/2021',
                  timeStart: '8:35',
                  timeEnd: '9:35',
                  timeEntryTotal: '1:00:00',
                  timeEntryPay: 50
                },
                { id: uuidv4(),
                date: '1/22/2021',
                timeStart: '9:35',
                timeEnd: '11:35',
                timeEntryTotal: '2:00:00',
                timeEntryPay: 100
                }
            ]
          }]
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
      notes: ''
    }, ...this.state.projects] }) 
  }

  delProjItem = (id) => {
    this.setState({ projects: [...this.state.projects
      .filter((project) => project.id !== id ) ]} 
    )

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
                <PunchInLoop  props={props} projects={this.state.projects} addNotes={this.addNotes}/>
              </React.Fragment>
            )} />

        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;



