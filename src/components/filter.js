import React, {Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {show: 'active'};
    }

    render () {
      return (
        <div class="btn-group" role="group" aria-label="Filter">
          <button type="button" class="btn btn-primary show-all">All</button>
          <button type="button" class="btn btn-info show-active">Active</button>
          <button type="button" class="btn btn-info show-completed">Completed</button>
        </div>
      );
    }

}

export default Filter;
