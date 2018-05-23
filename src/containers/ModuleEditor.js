import React from 'react'

import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicList from './TopicList'
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
        this.state = {
            courseId: '', moduleId: ''
        }}

        componentDidMount()
        {
            this.setCourseId(
                this.props.match.params.courseId);

            this.setModuleId(
                this.props.match.params.moduleId);
        }


    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);
    }



    render()
        {
            return (
                <div>
                    <LessonTabs courseId={this.state.courseId}
                                moduleId={this.state.moduleId}/>
                </div>
            );
        }
    }
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
        // );}}his);


