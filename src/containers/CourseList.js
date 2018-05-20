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

    deleteCourse(courseId) {
        console.log('delete ' + courseId);
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.findAllCourses(); });
    }


    componentDidMount() {
        this.findAllCourses();
    }
    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                console.log(courses);
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

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }

    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th><input onChange={this.titleChanged}
                                   className="form-control" id="titleFld"
                                   placeholder="CS1010"/></th>
                        <th><button onClick={this.createCourse}
                                    className="btn btn-primary">
                            <i className="fa fa-plus"/></button></th>
                    </tr>
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