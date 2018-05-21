import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import ModuleEditor from './ModuleEditor'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {courseId: '', moduleId: ''};
        this.selectCourse = this.selectCourse.bind(this);
        this.displayLessons = this.displayLessons.bind(this);
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    displayLessons(moduleId){
        this.setState({moduleId: moduleId});
    }

    render() { return(
        <div>
            <h2 style={{backgroundColor: "black",color: "white" }}>Course: {this.state.courseId}</h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList courseId={this.state.courseId}
                                displayLessons = {this.displayLessons}/>
                </div>
                <div className="col-8">
                    <LessonTabs courseId={this.state.courseId}
                                moduleId={this.state.moduleId}/>
                </div>
            </div>
        </div>
    );}}