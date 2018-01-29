import React from 'react';
import ToDoItem from './todo_item';

const ToDoList = (props) => {
    const todoItems = props.tasks.map((task) => {
        return <ToDoItem
        key = {task.index}
        task = {task}/>
    });

    return (
      <div class="todo-list">
      {todoItems}
      </div>
    );
}

export default ToDoList;
