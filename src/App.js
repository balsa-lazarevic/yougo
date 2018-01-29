import React, { Component } from 'react';
import AddBar from './components/add_bar';
import ToDoList from './components/todo_list';
import Filter from './components/filter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
          active: ['Test 1', 'Test 2'],
          completed: [],
          toShow: ['Test 1', 'Test 2']
        }
    }
    //this.setState({ toShow: this.state.active});

  render() {
    return (
      <div class="card todo-card">
        <div class="card-body">
          <AddBar />
          <ToDoList
          tasks={this.state.toShow}/>
          <Filter />
        </div>
      </div>
    );
  }
}

export default App;
