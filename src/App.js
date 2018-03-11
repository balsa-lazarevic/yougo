import React, { Component } from 'react';
import LinkBar from './components/link_bar';
//import horizon from 'horizon-youtube-mp3';
import './App.css';

var horizon = require('horizon-youtube-mp3');

class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
          yt_url: ''
        }
    }

  download(link) {
    console.log(link);
    /*
    horizon.getInfo('http://youtube.com/watch?v=NEA0BLnpOtg', function(err, e)
    {
  console.log(e);
    });
    */

  }
  render() {
    return (
      <div className="card todo-card">
        <div className="card-body">
          <LinkBar 
          downloadLink={this.download}/>
        </div>
      </div>
    );
  }

}

export default App;
