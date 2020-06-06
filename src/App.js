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
            punchIns: 5,
            totalTime: '5:33',
            totalPay: 339.76,
            notes: ''
          }]
  }

  // Example for adding notes
  addNotes = async (id, notes) => {
    // This would probably call the server to update the project so you would make something
    // ...that does a PUT request to the server:
    // So first get the project to update:
    const updatedProject = this.state.projects.slice()
      .find((project) => project.id === id);

    // Then, update it:
    updatedProject.notes = notes;

    // Then make the PUT request to the server:
    await fetch(`/projects/${id}/update`, {
      headers: {'Content-Type': 'application/json'},
      method: 'PUT',
      body: JSON.stringify(updatedProject)
    });

    // Then the projects would just be updated and re-fetched from the server and populated in state

    // But, for the sake of not having a back end yet, you can just do this:
    // Get the copy of state
    const projects = this.state.projects.slice();

    // Get the project with ${id}
    const index = projects.map(({id}) => id).indexOf(id);

    // Get the project you want to update
    const updatedProject = projects[index];

    // update it
    updatedProject.notes = notes;

    // Set state with copy
    this.setState({projects});
  };


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
                <PunchInLoop  props={props} projects={this.state.projects}/>
              </React.Fragment>
            )} />

        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;



