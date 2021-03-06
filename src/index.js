import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello';
import CourseManager from './containers/CourseManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import ModuleListItem from "./components/ModuleListItem";
import App from "./examples/App"

ReactDOM.render(
    <div>
        <CourseManager/>
    </div>,
    document.getElementById('root')
);

