import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import ModuleEditor from './ModuleEditor'
import { confirmable } from 'react-confirm';
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LessonTabs from "./LessonTabs";

export default class ModuleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: { title: '' },
            modules: []
        };
        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.displayLessons = this.displayLessons.bind(this);
        this.setCourseId = this.setCourseId.bind(this);

        this.moduleService = ModuleService.instance;
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        console.log(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    createModule() {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.props.courseId, this.state.module)
            .then(() => { this.findAllModulesForCourse(this.props.courseId); });
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    renderListOfModules() {
        let modules = null;
        if(this.state) {
            modules = this.state.modules.map((module) => {
                    return <ModuleListItem key={module.id}
                                           module={module}
                                           courseId={this.props.courseId}/>
                }
            );
        }
        return (
            modules
        )
    }

    deleteModule(moduleId) {
        var answer = window.confirm("Click Ok to delete");
        if(answer == true) {
            this.moduleService
                .deleteModule(moduleId)
                .then(() => {
                        this.findAllModulesForCourse
                        (this.state.courseId)
                    }
                );
        }

    }

    findAllModules() {
        this.moduleService
            .findAllModules()
            .then((modules) => {
                this.setState({modules: modules});
            })
    }

    displayLessons(moduleId) {
        this.props.displayLessons(moduleId);
    }

    // render() {
    //     return (
    //         <div>
    //             {/*<div>*/}
    //             <h3 style={{textAlign: "left"}}>Modules</h3>
    //             <br/>
    //             <ul className="list-group">
    //                 {this.renderListOfModules()}
    //             </ul>
    //             <br/>
    //             <input onChange={this.titleChanged}
    //                    value={this.state.module.title}
    //                    placeholder="Add module"
    //                    className="form-control text-center font-weight-bold"/>
    //             <button onClick={this.createModule} className="btn btn-dark btn-block">
    //                 <i className="fa fa-plus"></i>
    //             </button>
    //             {/*</div>*/}
    //             {/*<div>*/}
    //                 {/*<Router>*/}
    //                     {/*<div className="container-fluid">*/}
    //                         {/*<Route path="/courses/:courseId/module/:moduleId"*/}
    //                                {/*component={CourseEditor}>*/}
    //                         {/*</Route>*/}
    //                     {/*</div>*/}
    //                 {/*</Router>*/}
    //             {/*</div>*/}
    //         </div>
    //     );
    // }
    render(){
        return (
            <div>
            <Router>
            <div className="row">
                <div className="col-4">
                    <h3 style={{textAlign: "left"}}>Modules</h3>
                    <br/>
                    <ul className="list-group">
                        {this.renderListOfModules()}
                    </ul>
                    <br/>
                    <input onChange={this.titleChanged}
                           value={this.state.module.title}
                           placeholder="Add module"
                           className="form-control text-center font-weight-bold"/>
                    <button onClick={this.createModule} className="btn btn-dark btn-block">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
                <div className="col-8">
                    <Route path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}/>
                </div>
            </div>
            </Router>
                </div>)
    }
}