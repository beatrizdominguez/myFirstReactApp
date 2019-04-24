import React, {Component} from 'react';
import Main from '../../components/Main'
import './App.css';
import 'whatwg-fetch'

console.log('something is happening')

class App extends Component{

  // html to render
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Main/>
        </header>
      </div>
    );
  }
}

export default App;
