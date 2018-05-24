import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseList from "./CourseList";

export default class ModuleEditor
    extends React.Component{

    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);
        this.setLessonId =
            this.setLessonId.bind(this);
        this.state = {
            courseId: '', moduleId: '', lessonId: ''
        }}

    componentDidMount()
    {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);

        this.setLessonId(
            this.props.match.params.lessonId);
    }


    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }
    setLessonId(lessonId) {
        this.setState
        ({lessonId: lessonId});
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

        this.setLessonId(
            newProps.match.params.lessonId);
    }



    render()
    {
        return (
            <div>
                <TopicPills courseId={this.state.courseId}
                            moduleId={this.state.moduleId}
                            lessonId={this.state.lessonId}/>
            </div>
        );
    }
}


