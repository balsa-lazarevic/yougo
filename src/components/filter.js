import React, {Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {all: 'primary', active: 'info', completed: 'info'};
    }

    render () {
      //za aktiviranje odgovarajuceg dugmeta
      var klase = ["btn btn-" + this.state.all, "btn btn-" + this.state.active, "btn btn-" + this.state.completed];

      return (
        <div className="row">
          <div className="btn-group col-sm-8" role="group" aria-label="Filter">
            <button type="button" className={klase[0]} onClick={event => this.changeFilter('all')}>All</button>
            <button type="button" className={klase[1]} onClick={event => this.changeFilter('active')}>Active</button>
            <button type="button" className={klase[2]} onClick={event => this.changeFilter('completed')}>Completed</button>
          </div>
          <div className="col-sm-4">
            <button type="button" className="btn btn-danger" onClick={event => this.clearTasks()}>Clear All</button>
          </div>
        </div>
      );
    }

    changeFilter(new_filter) {
      this.props.changeFilter(new_filter);
      if(new_filter === 'all') { this.setState({all: 'primary', active: 'info', completed: 'info'});}
      else if(new_filter === 'active') { this.setState({all: 'info', active: 'primary', completed: 'info'});}
      else if(new_filter === 'completed') { this.setState({all: 'info', active: 'info', completed: 'primary'});}
    }

    clearTasks() {
      this.props.clearTasks();
    }
}

export default Filter;
