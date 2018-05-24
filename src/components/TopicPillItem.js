import React from 'react';
import Draggable from 'react-draggable';

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
                    <div class = "row">
                        <div className="col-sm-8">
                                {this.props.topic.title}
                        </div>
                        <div className="col-sm-4">
                            <button
                                style={{marginLeft: 20}}
                                className="btn btn-dark float-right align-content-center"
                                onClick={() =>
                                {this.props.deleteTopic
                                (this.props.topic.id)}}>
                                <i className="fa fa-times"/>
                            </button>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}
