// @flow

export const initialState: number = Date.now()

/**
 * Actions
 */

export const SET_TIME: string = 'setTime@clock'

export const setTime = (value: number) => ({
    type: SET_TIME,
    payload: value,
})

/**
 * Handlers
 */

export const actionHandlers = {
    [SET_TIME]: (state: SettingsState, action: ReduxAction) => action.payload,
}

export const reducer = (state: number = initialState, action: ReduxAction) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
