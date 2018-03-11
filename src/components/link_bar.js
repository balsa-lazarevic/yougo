import React, { Component } from 'react';

class LinkBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render () {
        return (
          <div className="add-bar row">
              <div className="form-group col-sm-12 col-lg-8">
                <label htmlFor="input-term" className="sr-only">Input term</label>
                <input
                  type="text"
                  className="form-control"
                  id="input-term"
                  placeholder="Enter link to download as MP3..."
                  autoFocus="autofocus"
                  value={this.state.term}
                  onKeyPress={event => this.ifEnter(event)}
                  onChange={event => this.onInputChange(event.target.value)}/>
              </div>
              <div className="form-group col-sm-12 col-lg-4">
                <button
                type="button" className="btn btn-primary add-dugme" onClick={event => this.download()}>Download</button>
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
        this.download();
      }
    }

    //Dodaje task, nakon sto ga validate-uje zove callback iz App.js
    download() {
      this.props.downloadLink(this.state.term);
    }
}

;export default LinkBar;
