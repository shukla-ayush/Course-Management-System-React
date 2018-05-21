import React from 'react'
import LessonService from '../services/LessonService';
import LessonListItem from '../components/LessonListItem'

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
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                    this.findAllLessonsForModule
                    (this.state.courseId, this.state.moduleId)
                }
            );
    }

    renderListOfLessons() {
        let lessons = null;
        if(this.state) {
            lessons = this.state.lessons.map(
                function (lesson) {
                    return <LessonListItem key={lesson.id}
                                           lesson={lesson}/>
                }
            )
            lessons = this.state.lessons.map((lesson) => {
                return <LessonListItem lesson={lesson}
                                       key={lesson.id}
                                       deleteLesson={this.deleteLesson}/>
            });
        }
        return (
            lessons
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <h4>Lesson List for module: {this.state.moduleId}</h4>
                <ul className="nav nav-pills">
                    {this.renderListOfLessons()}
                </ul>
                    <input onChange={this.titleChanged}
                           value={this.state.lesson.title}
                           placeholder="add lesson"
                           className="font-weight-bold text-center"
                           style = {{marginLeft: 20, marginTop: 20}}/>
                    <button onClick={this.createLesson} className="btn btn-dark">
                          <i className="fa fa-plus"></i>
                    </button>
            </div>
        );
    }
}
