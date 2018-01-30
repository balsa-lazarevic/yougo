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
            {name:'Create ToDo list', index: 1, status: 'completed'},
            {name:'Add a ToDo item', index: 1, status: 'active'}
          ],
          filter: 'all'
        }
    }

    addItem = (validatedItem) => {
          //dodaje item
          var tasks = this.state.tasks;
          var new_index = 0;
          if(tasks.length > 0) { new_index = tasks[tasks.length - 1].index + 1;}
          //var new_index = tasks[tasks.length - 1].index + 1;
          var new_task = {name: validatedItem, index: new_index, status: 'active'};
          tasks.push(new_task);
          this.setState({tasks: tasks});
          console.log(tasks);
      };

    changeFilter = (new_filter) => {
      this.setState({filter: new_filter});
    };

  render() {
    return (
      <div className="card todo-card">
        <div className="card-body">
          <AddBar
          addItem={this.addItem}/>
          <SearchBar />
          <ToDoList
          filter={this.state.filter}
          tasks={this.state.tasks}/>
          <Filter
          changeFilter={this.changeFilter}/>
        </div>
      </div>
    );
  }

}

export default App;
