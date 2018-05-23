import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value, created: Date.now(), modified: Date.now() }
        });
    }

    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    deleteCourse(courseId) {
        var answer = window.confirm("Click Ok to delete");
        if (answer == true){
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses(); })
        ;}
    }

    
    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            })
    }

    renderCourseRows() {
        let courses = null;
        if(this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id}
                                      course={course}/>
                }
            )
            courses = this.state.courses.map((course) => {
                return <CourseRow course={course}
                                  key={course.id}
                                  deleteCourse={this.deleteCourse}/>
            });
        }

        return (
            courses
        )
    }


    render() {
        return (
            <div>
                <h2 style = {{backgroundColor: "black", color: "white"}}>Course Manager</h2>
                <br/>
                {/*<div className="row">*/}
                    {/*<div className="col-sm-2">*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-8 row" >*/}
                        {/*<div className="col-sm-10">*/}
                        {/*<input onChange={this.titleChanged}*/}
                               {/*className="form-control" id="titleFld"*/}
                               {/*placeholder="Add Course"/>*/}
                        {/*</div>*/}
                        {/*<div className="col-sm-2">*/}
                        {/*<button onClick={this.createCourse}*/}
                                {/*className="btn btn-dark">*/}
                            {/*<i className="fa fa-plus"/>*/}
                        {/*</button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="col-sm-2">*/}
                    {/*</div>*/}
                {/*</div>*/}

                <div>
                <div className="col-sm-10">
                <input onChange={this.titleChanged}
                className="form-control" id="titleFld"
                placeholder="Add Course"/>
                </div>
                <div className="col-sm-2">
                <button onClick={this.createCourse}
                className="btn btn-dark">
                <i className="fa fa-plus"/>
                </button>
                </div>
                </div>
                <br/>
                <table className="table">
                    <thead>
                    {/*<tr>*/}
                        {/*<th></th>*/}
                        {/*<th><input onChange={this.titleChanged}*/}
                                   {/*className="form-control" id="titleFld"*/}
                                   {/*placeholder="CS1010"/></th>*/}
                        {/*<th><button onClick={this.createCourse}*/}
                                    {/*className="btn btn-dark">*/}
                            {/*<i className="fa fa-plus"/></button></th>*/}
                    {/*</tr>*/}
                    <tr>
                        <th>Title</th>
                        <th>Owned by</th>
                        <th>Last modified by me</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseList;