import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseList from "./CourseList";
import {widgetReducer} from "../reducers/widgetReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./widgetList";

let store = createStore(widgetReducer)

export default class TopicEditor
    extends React.Component{

    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);
        this.setLessonId =
            this.setLessonId.bind(this);
        this.setTopicId =
            this.setTopicId.bind(this);
        this.state = {
            courseId: '', moduleId: '', lessonId: '', topicId: ''
        }}

    componentDidMount()
    {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);

        this.setLessonId(
            this.props.match.params.lessonId);

        this.setTopicId(
            this.props.match.params.topicId);
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
    setTopicId(topicId) {
        this.setState
        ({topicId: topicId});
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

        this.setLessonId(
            newProps.match.params.lessonId);

        this.setTopicId(
            newProps.match.params.topicId);
    }



    render()
    {
        return (
            <Provider store={store}>
                <App topicId = {this.props.match.params.topicId}/>
            </Provider>
        );
    }
}


