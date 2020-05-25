import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import AddProject from './components/AddProject';


class App extends Component {
  state = {
    projects: [
      {
        id: uuidv4(),
        title: `Redesign the Hub's homepage`,
        payRate: 50,
        color: '#f00000',
        punchIns: 5,
        totalTime: '5:33',
        totalPay: 339.76,
        notes: ''
      },
      {
        id: uuidv4(),
        title: `Design logo for Nightingale`,
        payRate: 30,
        color: '#f03c00',
        punchIns: 2,
        totalTime: '8:33',
        totalPay: 339.76,
        notes: ''
      },
      {
        id: uuidv4(),
        title: 'Build Website',
        payRate: 100,
        color: '#6400f0',
        punchIns: 2,
        totalTime: '5:33',
        totalPay: 339.76,
        notes: ''
      },
    ]
  }

  render() {
  return (
    <div className="App">
        <Header />
        <AddProject />
        <Projects projects={this.state.projects}/>
    </div>
  );
  }
}

export default App;

