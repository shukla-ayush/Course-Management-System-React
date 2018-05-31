import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, widgetNameChanged}) => {
    let selectElem
    let inputElem
    let inputElem2
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
            <div hidden={preview}>
                <div className="row">
                <div className="col-sm-6">
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.headingText}
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
                <div className="row">
                <div className="col-sm-6">
                <input onChange={() => widgetNameChanged(widget.id, inputElem2.value)}
                       value={widget.widgetName}
                       placeholder="Widget Name"
                       className="form-control"
                       ref={node => inputElem2 = node}/>
                </div>
                <div className="col-sm-6">
                </div>
                </div>
                <br/>
                <br/>
                <h4>Preview</h4>
            </div>
            {widget.size == 1 && <h1>{widget.headingText}</h1>}
            {widget.size == 2 && <h2>{widget.headingText}</h2>}
            {widget.size == 3 && <h3>{widget.headingText}</h3>}
            </div>
        </div>
    )
}

const Paragraph = ({widget, preview, paragraphTextChanged, widgetNameChanged}) => {
    let selectElem
    let inputElem
    let inputElem3
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
                <div hidden={preview}>
                    <div className="row">
                    <div className="col-sm-6">
                    <textarea onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                           value={widget.text}
                           placeholder="Paragraph Text"
                           className="form-control"
                           ref={node => inputElem = node}/>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <input onChange={() => widgetNameChanged(widget.id, inputElem3.value)}
                                   value={widget.widgetName}
                                   placeholder="Widget Name"
                                   className="form-control"
                                   ref={node => inputElem3 = node}/>
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

const Image = ({widget, preview, imageUrlChanged, widgetNameChanged}) => {
    let selectElem
    let inputElem
    let inputElem4
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
                <div hidden={preview}>
                    <div className="row">
                    <div className="col-sm-6">
                    <input onChange={() => imageUrlChanged(widget.id, inputElem.value)}
                           value={widget.src}
                           placeholder="Image URL"
                           className="form-control"
                           ref={node => inputElem = node}/>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <input onChange={() => widgetNameChanged(widget.id, inputElem4.value)}
                                   value={widget.widgetName}
                                   placeholder="Widget Name"
                                   className="form-control"
                                   ref={node => inputElem4 = node}/>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h4>Preview</h4>
                </div>
                <div style = {{width: 200, height: 200}}>
                <img
                    style = {{maxWidth: "100%", maxHeight: "100%"}}
                    src = {widget.src}/>
                </div>
            </div>
        </div>
    )
}

const Link = ({widget, preview, hyperlinkChanged, linkNameChanged, widgetNameChanged}) => {
    let selectElem
    let inputElem
    let inputElem5
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
                           value={widget.linkUrl}
                           placeholder="Link URL"
                           className="form-control"
                           ref={node => inputElem = node}/>
                    <br/>
                    <input onChange={() => linkNameChanged(widget.id, inputElemName.value)}
                           value={widget.linkName}
                           placeholder="Link text"
                           className="form-control"
                           ref={node => inputElemName = node}/>
                    </div>
                    <div className="col-sm-6">
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <input onChange={() => widgetNameChanged(widget.id, inputElem5.value)}
                                   value={widget.widgetName}
                                   placeholder="Widget Name"
                                   className="form-control"
                                   ref={node => inputElem5 = node}/>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h4>Preview</h4>
                </div>
                <a  style={{color: "PowderBlue"}}
                    href = {widget.linkUrl}>{widget.linkName}</a>
            </div>
        </div>
    )
}

const List = ({widget, preview, listTextChanged, listTypeChanged, widgetNameChanged}) => {
    let selectElem
    let inputElem
    let inputElem6
    return(
        <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-11">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-sm-6">
                            <textarea onChange={() => listTextChanged(widget.id, inputElem.value)}
                                   value={widget.listItemsText}
                                   placeholder="Enter each item in separate row"
                                   className="form-control"
                                   ref={node => inputElem = node}/>

                        </div>
                            <div className="col-sm-3">
                            <select className="btn-dark form-control"
                                    onChange={() => listTypeChanged(widget.id, selectElem.value)}
                                    value={widget.listType}
                                    ref={node => selectElem = node}>
                                <option value="1">Unordered List</option>
                                <option value="2">Ordered List</option>
                            </select>
                            </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6">
                            <input onChange={() => widgetNameChanged(widget.id, inputElem6.value)}
                                   value={widget.widgetName}
                                   placeholder="Widget Name"
                                   className="form-control"
                                   ref={node => inputElem6 = node}/>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h4>Preview</h4>
                </div>
                {widget.listType == 1 && <ul>{widget.listItemsText.split("\n").map(function(item){return <li>{item}</li>;})}</ul>}
                {widget.listType == 2 && <ol>{widget.listItemsText.split("\n").map(function(item){return <li>{item}</li>;})}</ol>}
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
        actions.linkNameChanged(dispatch, widgetId, newLinkName),
    listTextChanged: (widgetId, newListText) =>
        actions.listTextChanged(dispatch, widgetId, newListText),
    listTypeChanged: (widgetId, newListType) =>
        actions.listTypeChanged(dispatch, widgetId, newListType),
    widgetNameChanged: (widgetId, newWidgetName) =>
        actions.widgetNameChanged(dispatch, widgetId, newWidgetName)
})

const stateToPropsMapper = state => ({
    preview: state.preview
})

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)

const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)

const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)

const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)

const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)


const Widget = ({widget, preview, dispatch}) => {
    let selectElement
    return(
        <div>
        <li style={{listStyleType: "none"}} className="border">
            <div hidden={preview}>
                <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-5 font-weight-bold">
                 <h3>{widget.widgetType} Widget</h3><br/>
                </div>
                <div className="col-sm-2">
                    <button onClick={e => (
                        dispatch({type: 'MOVE_UP', widget: widget})
                    )}
                        className="btn btn-dark">
                        <i className="fa fa-arrow-up"/>
                    </button>
                    <button onClick={e => (
                        dispatch({type: 'MOVE_DOWN', widget: widget})
                    )}
                        className="btn btn-dark">
                        <i className="fa fa-arrow-down"/>
                    </button>
                </div>
                <div className="col-sm-3">
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
                {widget.widgetType==='List' && <ListContainer widget={widget}/>}
                {widget.widgetType==='Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType==='Link' && <LinkContainer widget={widget}/>}
            </div>
        </li>
            <br/>
            <br/>
        </div>
    )
}
const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget)

export default WidgetContainer