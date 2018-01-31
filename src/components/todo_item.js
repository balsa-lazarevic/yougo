import React, {Component} from 'react';

class ToDoItem extends Component {

    render(){
      //Za stilizovanje item-a
      var klase = "custom-control-label strike-through-" + this.props.task.status;

      if(this.props.task.status === "active"){
        return (
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" onChange={event => this.props.itemChangeTaskStatus(this.props.task.index, 'completed')} id={this.props.task.index} />
            <label className={klase} htmlFor={this.props.task.index}>{this.props.task.name}</label>
          </div>
        );
      }
      else {
        return (
          <div className="custom-control custom-checkbox">
            <input type="checkbox" checked className="custom-control-input" onChange={event => this.props.itemChangeTaskStatus(this.props.task.index, 'active')} id={this.props.task.index} />
            <label className={klase} htmlFor={this.props.task.index}>{this.props.task.name}</label>
          </div>
        );
      }
    }

}

export default ToDoItem;
