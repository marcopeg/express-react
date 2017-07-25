import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export const navigateTo = path => history.push(path)

export default history
