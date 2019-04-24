import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

console.log('before the app is rendered')
// const greeting = React.createElement('h1', {}, 'Hello World!')
const greeting = <h1>Hello world! v2</h1>
// ReactDOM.render(greeting, document.getElementById('root'));


//sin router
// ReactDOM.render(<App />, document.getElementById('root'));

// con router
ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
