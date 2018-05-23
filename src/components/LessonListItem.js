import React from 'react';
import Draggable from 'react-draggable';

export default class LessonListItem
    extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <li className="list-group-item font-weight-bold nav-item"
                 style={{marginLeft: 20, marginTop: 20, backgroundColor: "white", color: "black"}}>
                 {/*<div class = "row">*/}
                 {/*<div className="col-sm-8">*/}
                     {this.props.lesson.title}
                 {/*</div>*/}
                {/*<div className="col-sm-4">*/}
                 <button
                     style={{marginLeft: 20}}
                     className="btn btn-primary float-right align-content-center"
                     onClick={() =>
                     {this.props.deleteLesson
                     (this.props.lesson.id)}}>
                     <i className="fa fa-times"/>
                 </button>
                  {/*</div>*/}
                {/*</div>*/}
                {/*<button className="btn btn-dark float-right "*/}
                        {/*onClick={() =>*/}
                        {/*{this.props.deleteLesson*/}
                        {/*(this.props.lesson.id)}}>*/}
                    {/*<i className="fa fa-times"/>*/}
                {/*</button>*/}
            </li>
            </div>
        );
    }
}
