import React, { Component } from 'react';

class AddBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return (
          <div className="add-bar row">
              <div className="form-group col-sm-8">
                <label htmlFor="input-term" className="sr-only">Input term</label>
                <input
                  type="text"
                  className="form-control"
                  id="input-term"
                  placeholder="Add a todo..."
                  value={this.state.term}
                  onKeyPress={event => this.ifEnter(event)}
                  onChange={event => this.onInputChange(event.target.value)}/>
              </div>
              <div className="form-group col-sm-4">
                <button
                type="button" className="btn btn-primary add-dugme" onClick={event => this.addItem()}>Add</button>
              </div>
          </div>
        );
    }
    //Na svaku promjenu inputa mijenja state
    onInputChange(term) {
      this.setState({term});
    }

    //Dodaje task ako je enter
    ifEnter(character) {
      if(character.which === 13)
      {
        //...pozovi donji addItem
        this.addItem();
      }
    }

    //Dodaje task, nakon sto ga validate-uje zove callback iz App.js
    addItem() {
      //Validate-uje
      var pass = true;
      var validate = this.state.term;

      //Da li je ista unijeto kao term
      if(validate[0] !== undefined)
      {
        //Prvo provjerava pocetno veliko slovo
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
}

;export default AddBar;
