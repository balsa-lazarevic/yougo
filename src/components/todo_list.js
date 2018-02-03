import React, { Component } from 'react';
import ToDoItem from './todo_item';

class ToDoList extends Component {

    //Mijenja status task-a
    itemChangeTaskStatus = (index, status) => {
      this.props.changeTaskStatus(index, status);
    }

    render() {
          //kopira array da bi ga sortirao
          //(u suprotnom promijenio bi redosljed i u state-u)
          var tasks = this.props.tasks.slice();
            //sortira array prije prikazivanja
            tasks.sort(function(a, b){
              return a.status > b.status;
            });

          //filteruje sta treba da se prikaze
          if(this.props.filter === "active")
          {
            tasks = tasks.filter(function(task) {
              return task.status === 'active';
            });
          }
          else if (this.props.filter === "completed")
          {
            tasks = tasks.filter(function(task) {
              return task.status === 'completed';
            });
          }

          //filteruje po search-u
          var search_term = this.props.search.term;
          //Pri ucitavanju prikazuje kao undefined pa moram da provjeravam na to
          if(search_term !== undefined && search_term.length > 2)
          {
            tasks = tasks.filter(function(task) {
              return task.name.includes(search_term);
            });
          }

          //Ubacuje filterovane task-ove za prikaz dalje
          const todoItems = tasks.map((task) => {
              return <ToDoItem task = {task} key={task.index} itemChangeTaskStatus={this.itemChangeTaskStatus}/>
          });

      return (
        <div className="todo-list">
        {todoItems}
        </div>
      );
    }
}

export default ToDoList;
