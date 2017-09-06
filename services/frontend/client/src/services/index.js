/* eslint global-require: off, import/prefer-default-export: off */

const services = []

export const configServices = (store) => {
    services.forEach(service => service.init && service.init(store.dispatch, store.getState))
    services.forEach(service => service.start && service.start(store.dispatch, store.getState))
}
