// @flow

import { put } from 'redux-saga/effects'
import { setName } from 'Reducers/settings-reducer'
import logger from 'Lib/logger'

// $FlowFixMe
import sharedData from 'external_shared_data' // eslint-disable-line

function* initReducers (data): any {
    logger.info(data)
    logger.info(setName(data.app_name))
    yield put(setName(data.app_name))
}

function* initSaga (): any {
    logger.info('init app saga')

    // Init redicers from in-page data payload
    if (sharedData) {
        yield initReducers(sharedData)
    }
}

export default initSaga
