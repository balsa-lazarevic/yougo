import React, { Component } from 'react';

class AddBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return (
          <div className="add-bar">
            <form className="form-inline">
                <div className="form-group col-sm-8">
                  <label htmlFor="input-term" className="sr-only">Input term</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input-term"
                    placeholder="Add a todo..."
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                </div>
                <button
                type="button" className="btn btn-primary col-sm-4" onClick={event => this.addItem()}>Add</button>
            </form>
          </div>
        );
    }
    onInputChange(term) {
      this.setState({term});
    }

    addItem() {
      //Validate-uje
      var pass = true;
      //Prvo provjerava pocetno veliko slovo
      var validate = this.state.term;
      if(validate[0] === validate[0].toUpperCase()) { }else{ pass = false; }
        //Provjerava je li pocetni space ili broj
        if(validate[0] === ' ' || !isNaN(validate[0])){ pass = false;}
      //Drugo, provjerava alfanumeric i space
      if(validate.match(/^[ a-zA-Z0-9]+$/)) { }else{ pass = false;};

      //Na kraju ubacuje ako je sve prosao
      if(pass)
      {
        //Promijeni state tasks u App.js
        this.props.addItem(validate);
        this.setState({term: ''});
      }

    }
}

;export default AddBar;
