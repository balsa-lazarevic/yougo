import React, { Component } from 'react';
import ToDoItem from './todo_item';

class ToDoList extends Component {

    //
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

          //Ubacuje filterovane task-ove za prikaz dalje
          const todoItems = tasks.map((task) => {
              return <ToDoItem task = {task} itemChangeTaskStatus={this.itemChangeTaskStatus}/>
          });

      return (
        <div className="todo-list">
        {todoItems}
        </div>
      );
    }
}

export default ToDoList;
