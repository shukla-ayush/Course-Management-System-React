import React from 'react'

export default class ModuleEditor
    extends React.Component{

    constructor(props){
        super(props);
        this.state = {moduleId: ''};
        this.selectModule = this.selectModule.bind(this);
    }

    componentDidMount() {
        this.selectModule
        (this.props.match.params.moduleId);
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }


    render(){
        return(
            <div>
                <h3>Module: {this.state.moduleId}</h3>
            </div>
        )
    }

}