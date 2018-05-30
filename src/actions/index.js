import * as constants from "../constants/index";


export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        headingText: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)
export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const imageUrlChanged = (dispatch, widgetId, newImageText) => (
    dispatch({
        type: constants.IMAGE_URL_CHANGED,
        id: widgetId,
        src: newImageText})
)

export const hyperlinkChanged = (dispatch, widgetId, newLinkText) => (
    dispatch({
        type: constants.HYPERLINK_CHANGED,
        id: widgetId,
        linkUrl: newLinkText})
)

export const linkNameChanged = (dispatch, widgetId, newLinkName) => (
    dispatch({
        type: constants.LINK_NAME_CHANGED,
        id: widgetId,
        linkName: newLinkName})
)

export const listTextChanged = (dispatch, widgetId, newListText) => (
    dispatch({
        type: constants.LIST_TEXT_CHANGED,
        id: widgetId,
        listItemsText: newListText})
)

export const listTypeChanged = (dispatch, widgetId, newListType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: newListType})
)

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8085/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
}

export const findAllWidgetsForTopic = (dispatch,topicId) => {
    fetch('http://localhost:8085/api/widget/'+topicId)
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets,
            topicId: topicId}))
}

export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)
export const save = (dispatch, topicId) => (
    dispatch({type: constants.SAVE, topicId})
)
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)