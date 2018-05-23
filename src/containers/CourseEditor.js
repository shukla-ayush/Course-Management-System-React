import React from 'react'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicList from './TopicList'
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
        // this.displayTopics = this.displayTopics.bind(this);
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

    // displayTopics(lessonId){
    //     this.setState({lessonId: lessonId});
    // }

    render() { return(
        <div>
            <h2 style={{backgroundColor: "black",color: "white", textAlign: "left" }}>Course: {this.state.courseId}</h2>
            <ModuleList courseId={this.state.courseId}/>
        </div>
    );}}

    // render() { return(
    //     <div>
    //         <h2 style={{backgroundColor: "black",color: "white" }}>Course: {this.state.courseId}</h2>
    //         <Router>
    //         <div className="row">
    //             <div className="col-4">
    //                 <Route path="/course/:courseId"
    //                        component={ModuleList}/>
    //             </div>
    //             <div className="col-8">
    //                 <Route path="/course/:courseId/module/:moduleId"
    //                        component={LessonTabs}/>
    //             </div>
    //         </div>
    //         </Router>
    //     </div>
    // );}}