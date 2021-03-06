import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import ESPReport from './Components/ESPReport';
import FacultyReport from './Components/FacultyReport';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ESPReport />
    <FacultyReport></FacultyReport>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
