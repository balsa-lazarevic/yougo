import React from 'react';
import ToDoItem from './todo_item';

const ToDoList = (props) => {
    //kopira array da bi ga sortirao
    //(u suprotnom promijenio bi redosljed i u state-u)
    var tasks = props.tasks.slice();
      //sortira array prije prikazivanja
      tasks.sort(function(a, b){
        return a.status > b.status;
      });

    //filteruje sta treba da se prikaze
    if(props.filter == "active")
    {
      tasks = tasks.filter(function(task) {
        return task.status == 'active';
      });
    }
    else if (props.filter == "completed")
    {
      tasks = tasks.filter(function(task) {
        return task.status == 'completed';
      });
    }

    const todoItems = tasks.map((task) => {
        return <ToDoItem task = {task}/>
    });

    return (
      <div className="todo-list">
      {todoItems}
      </div>
    );
}

export default ToDoList;
