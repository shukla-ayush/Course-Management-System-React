import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import CourseEditor from './CourseEditor'
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseManager
    extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Course Manager</h1>

                    <Route path="/courses"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>
                </div>
            </Router>
        )
    }
}