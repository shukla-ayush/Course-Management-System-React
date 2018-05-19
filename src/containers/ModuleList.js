import React from 'react'
import ModuleListItem from '../components/ModuleListItem';

export default class ModuleList
    extends React.Component {
    render() { return (
        <ul className="list-group">
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
        </ul>
    );
    }
}
