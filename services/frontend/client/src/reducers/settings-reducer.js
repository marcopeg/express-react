// @flow

export const initialState: SettingsState = {
    name: 'react-app',
}

/**
 * Actions
 */

export const SET_NAME: string = 'setName@settings'

export const setName = (name: SettingsStateName) => ({
    type: SET_NAME,
    payload: name,
})

/**
 * Handlers
 */

export const actionHandlers = {
    [SET_NAME]: (state: SettingsState, action: ReduxAction) => ({ ...state,
        name: action.payload,
    }),
}

export const reducer = (state: SettingsState = initialState, action: ReduxAction) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
