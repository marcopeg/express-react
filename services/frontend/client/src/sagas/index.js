import init from './init-saga'
import clock from './clock-saga'

const sagas = [
    init,
    clock,
]

export const configSagas = (reduxSaga) => {
    sagas.map(saga => reduxSaga.run(saga))
}

// needed by the injector package
// (https://github.com/GuillaumeCisco/redux-sagas-injector)
export function* rootSaga () {} // eslint-disable-line

export default configSagas
