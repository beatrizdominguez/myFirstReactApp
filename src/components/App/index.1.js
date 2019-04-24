import React from 'react';
import Intro from '../Intro'
import './App.css';

console.log('something is happening')
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>
          OMG this is my first app! :scream:
        </p>
        <Intro message='You can do better!'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
