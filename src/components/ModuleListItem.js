import React from 'react';

export default class ModuleListItem
    extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="container-fluid list-group-item font-weight-bold">
                <div>
                <a href="#" className="float-left text-dark"
                        onClick={() =>
                        {this.props.displayLessons
                        (this.props.module.id)}}>
                    {this.props.module.title}
                </a>
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
