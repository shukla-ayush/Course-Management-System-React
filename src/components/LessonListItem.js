import React from 'react';

export default class LessonListItem
    extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="font-weight-bold nav-item"
                style={{marginLeft: 20, marginTop: 20, backgroundColor: "black", color: "white"}}>
                <label>{this.props.lesson.title}</label>
                <button
                    style={{marginLeft: 20}}
                    className="btn btn-light float-right"
                    onClick={() =>
                    {this.props.deleteLesson
                    (this.props.lesson.id)}}>
                    <i className="fa fa-times"/>
                </button>
            </li>
        );
    }
}
