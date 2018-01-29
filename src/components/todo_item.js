import React from 'react';

const ToDoItem = ({task}) => {
    const id_and_label = 'customCheck' + task[1];
    console.log(task[1]);

    return (
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id={id_and_label} />
        <label class="custom-control-label" for={id_and_label}>{task[0]}</label>
      </div>
    );
}

export default ToDoItem;
