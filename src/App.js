import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import PunchInLoop from './components/PunchInLoop';



class App extends Component {
  state = {
    projects: [{
            id: uuidv4(),
            title: `Redesign the Hub's homepage`,
            payRate: 50,
            color: '#f00000',
            punchIns: 5,
            totalTime: '5:33',
            totalPay: 339.76,
            notes: ''
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
    this.setState( {projects: [...this.state.projects
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

  render() {
  return (
    <Router>
      <div className="App">
          <Header />

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
          
          <Route path='/punchin' render={props => (
            <React.Fragment>
              <PunchInLoop projects={this.state.projects}/>
            </React.Fragment>
          )} />


          
      </div>
    </Router>
  );
  }
}

export default App;



