// const EventEmitter = require('events');

import { error as logError } from './logger'

let listeners = []

export const reduxEventsMiddleware = store => next => (action) => {
    // console.log(`EVENT: ${action.type}`)
    listeners
        .filter(listener => listener.action === action.type)
        .forEach((listener) => {
            try {
                if (listener.async) {
                    setTimeout(() => listener.handler(action)(store.dispatch, store.getState))
                } else {
                    listener.handler(action)(store.dispatch, store.getState)
                }
            } catch (e) {
                logError('Redux event handler error')
            }
        })

    return next(action)
}

export const registerListener = (listener) => {
    listeners = [ ...listeners, ...listener ]
}
