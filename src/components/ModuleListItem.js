import React from 'react';
import Draggable from 'react-draggable';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom'

export default class ModuleListItem
    extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.courseId + "***********");
    }

    render() {
        return (
            <li className="container-fluid list-group-item font-weight-bold">
                <div>
                {/*<a href="#" className="float-left text-dark"*/}
                        {/*onClick={() =>*/}
                        {/*{this.props.displayLessons*/}
                        {/*(this.props.module.id)}}>*/}
                    {/*{this.props.module.title}*/}
                {/*</a>*/}
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`} style={{color: "black"}}>
                    {this.props.module.title}
                </Link>
                <button className="btn btn-dark float-right"
                        onClick={() =>
                        {this.props.deleteModule
                        (this.props.module.id)}}>
                    <i className="fa fa-times"/>
                </button>
                </div>
            </li>
        );
    }
}
