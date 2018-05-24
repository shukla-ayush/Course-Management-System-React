import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseList from "./CourseList";
import ModuleEditor from "./ModuleEditor";

export default class CourseEditor
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {courseId: '', moduleId: '', lessonId: ''};
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
            <h1 style={{backgroundColor: "black",color: "white", textAlign: "center" }}>Course: {this.state.courseId}</h1>
            <ModuleList courseId={this.state.courseId}/>
        </div>
    );}}