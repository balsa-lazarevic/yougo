import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return (
          <div className="search-bar">
            <form className="form-inline">
                <div className="form-group col-sm-8">
                  <label htmlFor="input-term" className="sr-only">Input term</label>
                  <input
                    type="text"
                    className="form-control"
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
