import React from 'react';
import { Link } from 'react-router-dom'

class CourseRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}`}>
                     {this.props.course.title}
                    </Link>
                </td>
                <td>
                    me
                </td>
                <td>

                </td>
                <td>
                    <button onClick={() => {
                        this.props.deleteCourse(this.props.course.id)}} className="btn btn-primary">
                        <i className="fa fa-times"/>
                    </button>
                </td>
            </tr>
        )
    }
}
export default CourseRow;