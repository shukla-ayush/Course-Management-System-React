import React from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom'

export default class TopicPillItem
    extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <li className="list-group-item font-weight-bold nav-item"
                    style={{marginLeft: 20, marginTop: 20, backgroundColor: "White", color: "Black"}}>
                    <div className = "row">
                        <div className="col-sm-8">
                            <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`} style={{color: "black"}}>
                                {this.props.topic.title}
                             </Link>
                        </div>
                        <div className="col-sm-4">
                            <button
                                style={{marginLeft: 20}}
                                className="btn btn-dark float-right align-content-center"
                                onClick={() =>
                                {this.props.deleteTopic
                                (this.props.topic.id)}}>
                                <i className="fa fa-trash"/>
                            </button>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}
