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
                    <Link to={`/course/${this.props.course.id}`} style={{color: "black"}}>
                     {this.props.course.title}
                    </Link>
                </td>
                <td>
                    me
                </td>
                <td>
                    {this.props.course.modified}
                </td>
                <td>
                    <button onClick={() => {
                        this.props.deleteCourse(this.props.course.id)}} className="btn btn-dark">
                        <i className="fa fa-times"/>
                    </button>
                </td>
            </tr>
        )
    }
}
export default CourseRow;