import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from '../components/widget'

class WidgetList extends Component {
    constructor(props) {
        super(props)
        //this.props.findAllWidgets()
        this.props.findAllWidgetsForTopic(this.props.topicId)
    }
    render() {
        return(
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <div className="row">
                <div className="col-sm-8">
                </div>
                <div className="col-sm-1">
                <button className="btn btn-dark"
                    hidden={this.props.previewMode}  onClick={() => {this.props.save(this.props.topicId)}}>
                    Save <i className="fa fa-file"/>
                </button>
                </div>
                <div className="col-sm-1">
                </div>
                <div className="col-sm-1">
                <button className="btn btn-dark"
                    onClick={this.props.preview}>
                    Preview<i className="fa fa-eye"/>
                </button>
                </div>
                <div className="col-sm-1">
                </div>
                </div>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>
                <button className="btn btn-dark"
                    onClick={this.props.addWidget}>Add widget
                </button>
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
})

const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch, topicId),
    addWidget: () => actions.addWidget(dispatch),
    save: (topicId) => actions.save(dispatch, topicId),
    preview: () => actions.preview(dispatch)
})

const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList)

export default App