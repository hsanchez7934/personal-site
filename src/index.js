import React from 'react';
import ReactDOM from 'react-dom';
import './components/App/App.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
require('dotenv').config()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
