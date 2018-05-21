import React from 'react'
import { Link } from 'react-router-dom'

export default class CourseCard extends React.Component {
    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
            <img className="card-img-top"
             src="https://picsum.photos/200/200"/>
            <div className="card-body">
             <h5 className="card-title float-md-right">
                 <Link to={`/course/${this.props.course.id}`} style={{color: "black"}}>
                     {this.props.course.title}
                 </Link>
             </h5>
             <p className="card-text">
                 <button onClick={() => {
                     this.props.deleteCourse(this.props.course.id)}} className="btn btn-dark">
                     <i className="fa fa-times"/>
                 </button>
             </p>
            </div>
            </div>)
}
}