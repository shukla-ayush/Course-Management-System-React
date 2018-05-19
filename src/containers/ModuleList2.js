import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

export default class ModuleList2
    extends React.Component {
    constructor(props){
        super(props)
        this.state = { modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678},
            ]
        }
        ;

        this.titleChanged = this.titleChanged.bind(this);

    }

    titleChanged(event){
        console.log(event.target.value);
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map(function(module){
                return <ModuleListItem
                    title={module.title} key={module.id}/>
            });
        return modules;}

    render(){
        return(
            <div>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>
                <ul className="list-group">
                {this.renderListOfModules()}
                </ul>
            </div>
        )

    }
}