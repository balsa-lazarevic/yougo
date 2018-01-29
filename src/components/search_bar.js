import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return (
          <div className="search-bar">
            <form class="form-inline">
                <div class="form-group col-sm-8">
                  <label for="input-term" class="sr-only">Input term</label>
                  <input
                    type="text"
                    class="form-control"
                    id="input-term"
                    placeholder="Search tasks"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                </div>
            </form>
          </div>
        );
    }
    onInputChange(term) {
      this.setState({term});
    }
}

export default SearchBar;
