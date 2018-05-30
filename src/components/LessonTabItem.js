import React from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom'

export default class LessonTabItem
    extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <li className="list-group-item font-weight-bold nav-item"
                 style={{marginLeft: 20, marginTop: 20, backgroundColor: "LightSteelBlue",color: "Black"}}>
                 <div className = "row">
                 <div className="col-sm-8">
                     <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`} style={{color: "white"}}>
                         {this.props.lesson.title}
                     </Link>
                 </div>
                <div className="col-sm-4">
                 <button
                     style={{marginLeft: 20}}
                     className="btn btn-dark float-right align-content-center"
                     onClick={() =>
                     {this.props.deleteLesson
                     (this.props.lesson.id)}}>
                     <i className="fa fa-trash"/>
                 </button>
                  </div>
                </div>
            </li>
            </div>
        );
    }


}
