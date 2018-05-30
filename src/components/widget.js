import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
    let selectElem
    let inputElem
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
            <div hidden={preview}>
                <div className="row">
                <div className="col-sm-6">
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       placeholder="Heading Text"
                       className="form-control"
                       ref={node => inputElem = node}/>
                </div>
                <div className="col-sm-3">
                <select className="btn-dark form-control"
                        onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                </div>
                <div className="col-sm-3">
                </div>
                </div>
                <br/>
                <h4>Preview</h4>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
            </div>
        </div>
    )
}

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
    let selectElem
    let inputElem
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
                <div hidden={preview}>
                    <div className="row">
                    <div className="col-sm-6">
                    <input onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           placeholder="Paragraph Text"
                           className="form-control"
                           ref={node => inputElem = node}/>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    </div>
                    <br/>
                    <h4>Preview</h4>
                </div>
                <p>{widget.text}</p>
            </div>
        </div>
    )
}

const Image = ({widget, preview, imageUrlChanged}) => {
    let selectElem
    let inputElem
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
                <div hidden={preview}>
                    <div className="row">
                    <div className="col-sm-6">
                    <input onChange={() => imageUrlChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           placeholder="Image URL"
                           className="form-control"
                           ref={node => inputElem = node}/>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    </div>
                    <br/>
                    <h4>Preview</h4>
                </div>
                <div style = {{width: 200, height: 200}}>
                <img
                    style = {{maxWidth: "100%", maxHeight: "100%"}}
                    src = {widget.text}/>
                </div>
            </div>
        </div>
    )
}

const Link = ({widget, preview, hyperlinkChanged, linkNameChanged}) => {
    let selectElem
    let inputElem
    let inputElemName
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
                <div hidden={preview}>
                    <div className="row">
                    <div className="col-sm-6">
                    <input onChange={() => hyperlinkChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           placeholder="URL"
                           className="form-control"
                           ref={node => inputElem = node}/>
                    <input onChange={() => linkNameChanged(widget.id, inputElemName.value)}
                           value={widget.linkName}
                           placeholder="Link name"
                           className="form-control"
                           ref={node => inputElemName = node}/>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    </div>
                    <br/>
                    <h4>Preview</h4>
                </div>
                <a href = {widget.text}>{widget.linkName}</a>
            </div>
        </div>
    )
}


const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    imageUrlChanged: (widgetId, newImageText) =>
        actions.imageUrlChanged(dispatch, widgetId, newImageText),
    hyperlinkChanged: (widgetId, newLinkText) =>
        actions.hyperlinkChanged(dispatch, widgetId, newLinkText),
    linkNameChanged: (widgetId, newLinkName) =>
        actions.linkNameChanged(dispatch, widgetId, newLinkName)
})

const stateToPropsMapper = state => ({
    preview: state.preview
})

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)

const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)

const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)


const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return(
        <li>
            <div hidden={preview}>
                <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-6 font-weight-bold">
                 <h3>{widget.widgetType} Widget</h3><br/>
                </div>
                <div className="col-sm-1.5">
                    <button>
                        <i className="fa fa-arrow-up"/>
                    </button>
                    <button>
                        <i className="fa fa-arrow-down"/>
                    </button>
                </div>
                <div className="col-sm-2.5">
                <select className="form-control"
                        value={widget.widgetType}
                        onChange={e =>
                            dispatch({
                                type: 'SELECT_WIDGET_TYPE',
                                id: widget.id,
                                widgetType: selectElement.value
                            })} ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>
                </div>
                <div className="col-sm-1">
                <button className="btn btn-dark form-control"
                    onClick={e => (
                    dispatch({type: DELETE_WIDGET, id: widget.id})
                )}><i className="fa fa-trash"/></button>
                </div>
                </div>
            </div>
            <div>
                {widget.widgetType==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
            </div>
        </li>
    )
}
const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget)

export default WidgetContainer