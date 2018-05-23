import React from 'react'
import TopicListItem from '../components/TopicListItem'
import TopicService from '../services/TopicService'

export default class TopicList
    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: { title: '' },
            topics: []
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.titleChanged = this.titleChanged.bind(this);

        this.topicService = TopicService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopicsForLesson(newProps.courseId, newProps.moduleId, newProps.lessonId)
    }

    setTopics(topics) {
        this.setState({topics: topics})
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        this.topicService
            .findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then((topics) => {this.setTopics(topics)});
    }

    setCourseId(courseId){
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId){
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId){
        this.setState({lessonId: lessonId});
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({topic: {title: event.target.value}});
    }

    createTopic() {
        this.topicService
            .createTopic
            (this.props.courseId, this.props.moduleId, this.props.lessonId, this.state.topic)
            .then(() =>
            { this.findAllTopicsForLesson
            (this.props.courseId, this.props.moduleId, this.props.lessonId); });
    }

    deleteTopic(topicId) {
        var answer = window.confirm("Click Ok to Delete");
        if (answer == true) {
            this.topicService
                .deleteTopic(topicId)
                .then(() => {
                        this.findAllTopicsForLesson
                        (this.state.courseId, this.state.moduleId, this.state.lessonId)
                    }
                );
        }
    }

    findAllTopics() {
        this.topicService
            .findAllTopics()
            .then((topics) => {
                this.setState({topics: topics});
            })
    }

    renderListOfTopics() {
        let topics = null;
        if(this.state) {
            topics = this.state.topics.map(
                function (topic) {
                    return <TopicListItem key={topic.id}
                                           topic={topic}/>
                }
            )
            topics = this.state.topics.map((topic) => {
                return <TopicListItem topic={topic}
                                       key={topic.id}
                                       deleteTopic={this.deleteTopic}/>
            });
        }
        return (
            topics
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <h4>Topic List for Lesson: {this.state.lessonId}</h4>
                <ul className="nav nav-pills">
                    {this.renderListOfTopics()}
                </ul>
                <input onChange={this.titleChanged}
                       value={this.state.topic.title}
                       placeholder="add topic"
                       className="font-weight-bold text-center"
                       style = {{marginLeft: 20, marginTop: 20}}/>
                <button onClick={this.createTopic} className="btn btn-dark">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        );
    }
}
