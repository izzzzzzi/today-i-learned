import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasicComponent from './BasicComponent';


ReactDOM.render(
    <React.StrictMode>
        {/* <App/> */}
        <BasicComponent name="liz"/>
    </React.StrictMode>,
    document.getElementById('root')
);