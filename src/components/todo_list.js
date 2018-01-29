import React from 'react';
import ToDoItem from './todo_item';

const ToDoList = (props) => {
    const todoItems = props.tasks.map((task, index) => {
        return <ToDoItem
        key = {index}
        task = {[task, index]}/>
    });

    return (
      <div class="todo-list">
      {todoItems}
      </div>
    );
}

export default ToDoList;
