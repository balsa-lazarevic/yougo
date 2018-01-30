import React from 'react';

const ToDoItem = ({task}) => {
    //Za stilizovanje item-a
    const klase = "custom-control-label strike-through-" + task.status;

    if(task.status === "active"){
      return (
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={task.index} />
          <label className={klase} htmlFor={task.index}>{task.name}</label>
        </div>
      );
    }
    else {
      return (
        <div className="custom-control custom-checkbox">
          <input type="checkbox" checked disabled className="custom-control-input" id={task.index} />
          <label className={klase} htmlFor={task.index}>{task.name}</label>
        </div>
      );
    }

}

export default ToDoItem;
