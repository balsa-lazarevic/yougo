import React from 'react';

const ToDoItem = ({task, key}) => {
    //Za stilizovanje item-a
    const klase = "custom-control-label strike-through-" + task.status;

    if(task.status === "active"){
      return (
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id={task.index} />
          <label class={klase} for={task.index}>{task.name}</label>
        </div>
      );
    }
    else {
      return (
        <div class="custom-control custom-checkbox">
          <input type="checkbox" checked disabled class="custom-control-input" id={task.index} />
          <label class={klase} for={task.index}>{task.name}</label>
        </div>
      );
    }

}

export default ToDoItem;
