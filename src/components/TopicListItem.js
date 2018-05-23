import React from 'react';
import Draggable from 'react-draggable';

export default class TopicListItem
    extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Draggable>
                <div>
                    <li className="font-weight-bold nav-item"
                        style={{marginLeft: 20, marginTop: 20, backgroundColor: "black", color: "white"}}>
                        <label>{this.props.topic.title}</label>
                        <button
                            style={{marginLeft: 20}}
                            className="btn btn-light float-right"
                            onClick={() =>
                            {this.props.deleteTopic
                            (this.props.topic.id)}}>
                            <i className="fa fa-times"/>
                        </button>
                    </li>
                </div>
            </Draggable>
        );
    }
}
