import React from 'react'
import LessonService from '../services/LessonService';
import LessonTabItem from '../components/LessonTabItem'
import LessonEditor from "./LessonEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class LessonTabs
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: { title: '' },
            lessons: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);

        this.lessonService = LessonService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        console.log(this.props.courseId);
        console.log(this.props.moduleId);
        this.findAllLessonsForModule(this.props.courseId, this.props.moduleId)
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId)
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }

    setCourseId(courseId){
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId){
        this.setState({moduleId: moduleId});
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson: {title: event.target.value}});
    }

    createLesson() {
        this.lessonService
            .createLesson(this.props.courseId, this.props.moduleId, this.state.lesson)
            .then(() => { this.findAllLessonsForModule(this.props.courseId, this.props.moduleId); });
    }


    deleteLesson(lessonId) {
        var answer = window.confirm("Click Ok to Delete");
        if (answer == true) {
            this.lessonService
                .deleteLesson(lessonId)
                .then(() => {
                        this.findAllLessonsForModule
                        (this.state.courseId, this.state.moduleId)
                    }
                );
        }
    }

    findAllLessons() {
        this.lessonService
            .findAllLessons()
            .then((lessons) => {
                this.setState({lessons: lessons});
            })
    }

    renderListOfLessons() {
        let lessons = null;
        if(this.state) {
            lessons = this.state.lessons.map((lesson) => {
                    return <LessonTabItem key={lesson.id}
                                          lesson={lesson}
                                          courseId={this.props.courseId}
                                          moduleId={this.props.moduleId}
                                          deleteLesson={this.deleteLesson}/>
                }
            );
        }
        return (
            lessons
        )
    }

    render(){
        return (
            <div>
                <Router>
                    <div>
                        <div>
                            <h3 style={{textAlign: "center"}}>Lessons</h3>
                            <ul className="nav nav-pills">
                                {this.renderListOfLessons()}
                            </ul>
                            <br/>
                            <input onChange={this.titleChanged}
                                   value={this.state.lesson.title}
                                   placeholder="Add Lesson"
                                   className="form-control text-center font-weight-bold"/>
                            <button onClick={this.createLesson} className="btn btn-dark btn-block">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <div>
                            <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                                   component={LessonEditor}/>
                        </div>
                    </div>
                </Router>
            </div>)
    }

}
