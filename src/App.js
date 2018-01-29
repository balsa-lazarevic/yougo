import React, { Component } from 'react';
import AddBar from './components/add_bar';
import SearchBar from './components/search_bar';
import ToDoList from './components/todo_list';
import Filter from './components/filter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
          tasks: [
          {name: 'Test 1', index: 1 , status: 'active'},
          {name:'Test 2', index: 2 , status: 'completed'},
          {name:'Test 3', index: 3 , status: 'completed'}
          ],
          filter: 'all'
        }
    }
    //this.setState({ toShow: this.state.active});

  render() {
    return (
      <div class="card todo-card">
        <div class="card-body">
          <AddBar />
          <SearchBar />
          <ToDoList
          tasks={this.state.tasks}/>
          <Filter />
        </div>
      </div>
    );
  }

}

export default App;
