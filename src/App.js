import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';


class App extends Component {
  state = {
    projects: [
      {
        id: '1',
        title: `Redesign the Hub's homepage`,
        payRate: 50,
        color: '#f00000',
        punchIns: 5,
        totalTime: '5:33',
        totalPay: 339.76,
        notes: ''
      },
      {
        id: '2',
        title: `Design logo for Nightingale`,
        payRate: 30,
        color: '#f03c00',
        punchIns: 2,
        totalTime: '8:33',
        totalPay: 339.76,
        notes: ''
      },
      {
        id: '3',
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
        <Projects projects={this.state.projects}/>
    </div>
  );
  }
}

export default App;

