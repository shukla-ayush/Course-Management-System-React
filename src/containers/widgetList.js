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
                <br/>
                {/*<h1>Widget List {this.props.widgets.length}</h1>*/}
                <h2 className="text-center">Widgets</h2>
                <div className="row">
                <div className="col-sm-8">
                </div>
                <div className="col-sm-2">
                <button className="btn btn-dark"
                        style = {{backgroundColor: "black", color: "white"}}
                    hidden={this.props.previewMode}  onClick={() => {this.props.save(this.props.topicId)}}>
                    Save <i className="fa fa-file"/>
                </button>
                </div>
                <div className="col-sm-2">
                <button className="btn btn-dark"
                        style = {{backgroundColor: "black", color: "white"}}
                    onClick={this.props.preview}>
                    Preview<i className="fa fa-eye"/>
                </button>
                </div>
                </div>
                <br/>
                <br/>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>
                <div style={{textAlign: "center"}}>
                <button style = {{backgroundColor: "Black", color: "White"}}
                    className="btn btn-dark"
                    onClick={this.props.addWidget}><i className="fa fa-plus"/> Widget
                </button>
                </div>
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