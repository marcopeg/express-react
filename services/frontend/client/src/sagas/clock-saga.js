// @flow

import { put } from 'redux-saga/effects'
import { setTime } from 'Reducers/clock-reducer'
import pause from 'Lib/pause'

function* initClockSaga (): any {
    while (true) { // eslint-disable-line
        yield put(setTime(Date.now()))
        yield pause(900)
    }
}

export default initClockSaga
