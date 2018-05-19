import React from 'react';
import CourseRow from '../components/CourseRow';

export default class CourseList
    extends React.Component{
    render(){
        return(
            <div>
               <h2>Course List</h2>
                    <table>
                        <thead><tr><th>Title</th></tr></thead>
                        <tbody>
                            <tr>
                                <td><CourseRow/></td>
                            </tr>
                            <tr>
                                <td><CourseRow/></td>
                            </tr>
                            <tr>
                                <td><CourseRow/></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}