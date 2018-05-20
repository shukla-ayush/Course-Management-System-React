import React from 'react';

export default class ModuleListItem
    extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                {/*<span className="float-right">*/}
                    {/*<i className="fa fa-times"></i>*/}
                {/*</span>*/}
                <button className="btn btn-primary"
                        onClick={() =>
                        {this.props.deleteModule
                        (this.props.module.id)}}>
                    <i className="fa fa-times float-right"/>
                </button>
            </li>
        );
    }
}
