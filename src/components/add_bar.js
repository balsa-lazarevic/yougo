import React, { Component } from 'react';

class AddBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    //const add_term = this.state.term;
    //const isEnabled =  add_term[0] === add_term[0].toUpperCase;

    render () {
        return (
          <div className="add-bar">
            <form class="form-inline">
                <div class="form-group col-sm-8">
                  <label for="input-term" class="sr-only">Input term</label>
                  <input
                    type="text"
                    class="form-control"
                    id="input-term"
                    placeholder="Add a todo..."
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                </div>
                <button
                //disabled={!isEnabled} 
                type="submit" class="btn btn-primary col-sm-4">Add</button>
            </form>
          </div>
        );
    }
    onInputChange(term) {
      this.setState({term});
      //this.props.onAddTermChange(term);
    }
}

export default AddBar;
