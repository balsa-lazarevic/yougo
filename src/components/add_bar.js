import React, { Component } from 'react';

class AddBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

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
                type="button" class="btn btn-primary col-sm-4" onClick={event => this.addItem()}>Add</button>
            </form>
          </div>
        );
    }
    onInputChange(term) {
      this.setState({term});
      console.log(this.state);
    }

    addItem() {
      //Validate-uje
      var pass = true;
      //Prvo provjerava pocetno veliko slovo
      var validate = this.state.term;
      if(validate[0] == validate[0].toUpperCase()) {console.log(this.state);}else{console.log('pocinje malim slovom'); pass = false;}
      //Drugo, provjerava alfanumeric i space
      if(validate.match(/^[ a-zA-Z0-9]+$/)) { console.log('moze');}else{console.log('ne moze'); pass = false;};

      //Na kraju ubacuje ako je sve prosao
      
    }
}

;export default AddBar;
