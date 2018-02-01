import React, { Component } from 'react';
import cookie from 'react-cookies';
import AddBar from './components/add_bar';
import SearchBar from './components/search_bar';
import ToDoList from './components/todo_list';
import Filter from './components/filter';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
          tasks: [
            {name:'Create ToDo list', index: 1, status: 'completed'},
            {name:'Add a ToDo item', index: 2, status: 'active'}
          ],
          filter: 'all',
          search: ''
        }
    }

    //Dodaje novi Item - samo ako je validate-ovan
    addItem = (validatedItem) => {
          //dodaje item
          var tasks = this.state.tasks;
          var new_index = 0;
          if(tasks.length > 0) { new_index = tasks[tasks.length - 1].index + 1;}
          //var new_index = tasks[tasks.length - 1].index + 1;
          var new_task = {name: validatedItem, index: new_index, status: 'active'};
          tasks.push(new_task);
          this.setState({tasks: tasks});
          //Save-uje izmjenu u cookie
          var expires = this.cookieDatum();
          cookie.save('tasks', this.state.tasks, { path: '/', expires: expires });
      };

      clearTasks = () => {
          //Clear-uje task-ove i postavlja jedan (radi indexovanja)
          var cleared_tasks = [
            {name:'Create ToDo list', index: 1, status: 'completed'},
            {name:'Add a ToDo item', index: 2, status: 'active'}
          ];
          this.setState({tasks: cleared_tasks});
          //Save-uje izmjenu u cookie
          var expires = this.cookieDatum();
          cookie.save('tasks', cleared_tasks, { path: '/', expires: expires });
        };

    //Mijenja filter za prikaz task-ova
    changeFilter = (new_filter) => {
      this.setState({filter: new_filter});
    };

    //Mijenja filter za prikaz task-ova
    changeSearchTerm = (new_search_term) => {
      this.setState({search: new_search_term});
    };

    //Mijenja status datog task-a
    changeTaskStatus = (index, new_status) => {
      var cur_tasks = this.state.tasks;
      cur_tasks[index - 1].status = new_status;
      this.setState({tasks: cur_tasks});
      //Save-uje izmjenu u cookie
      var expires = this.cookieDatum();
      cookie.save('tasks', this.state.tasks, { path: '/', expires: expires });
      console.log(this.cookieDatum());
    };

    //Prije renderovanja
    componentWillMount() {
      //Za cookies
      if(cookie.load('tasks') === undefined)
      {
        var expires = this.cookieDatum();
        cookie.save('tasks', this.state.tasks, { path: '/', expires: expires });
      }
      //ako ima cookie-a onda uvozi snimljene task-ove
      else {
        this.setState({tasks: cookie.load('tasks')});
      }
    }

    //Vraca datum za expires za cookie
    cookieDatum() {
      var datum = new Date();
      datum.setTime(datum.getTime()+(365*24*60*60*1000)); //godinu dana
      return datum;
    }

  render() {
    return (
      <div className="card todo-card">
        <div className="card-body">
          <AddBar
          addItem={this.addItem}/>
          <SearchBar
          changeSearchTerm={this.changeSearchTerm}/>
          <ToDoList
          filter={this.state.filter}
          search={this.state.search}
          changeTaskStatus={this.changeTaskStatus}
          tasks={this.state.tasks}/>
          <Filter
          changeFilter={this.changeFilter}
          clearTasks={this.clearTasks}/>
        </div>
      </div>
    );
  }

}

export default App;
