// @flow

export const initialState: any = {
    images: [],
    active: null,
}

/**
 * Actions
 */

export const SET_IMAGES: string = 'setImages@gallery'
export const SET_ACTIVE: string = 'setActive@gallery'

export const setImages = (images: Array<any>) => ({
    type: SET_IMAGES,
    payload: images,
})

export const setActive = (value: any) => ({
    type: SET_ACTIVE,
    payload: value,
})

/**
 * Handlers
 */

export const actionHandlers = {
    [SET_IMAGES]: (state: SettingsState, action: ReduxAction) => ({ ...state,
        images: [ ...action.payload ],
    }),
    [SET_ACTIVE]: (state: SettingsState, action: ReduxAction) => ({ ...state,
        active: action.payload,
    }),
}

export const reducer = (state: number = initialState, action: ReduxAction) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
