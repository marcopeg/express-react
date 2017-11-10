
import Route from 'route-parser'
import logger from 'Lib/logger'

const routes = [
    {
        test: new Route('/gallery/:id'),
        action: ({ id }) => (dispatch) => {
            logger.verbose(`gallery picture ${id}`)
            dispatch({ type: 'showGalleryPicture', payload: id })
        },
    },
    {
        test: new Route('/gallery(/)'),
        action: () => () => {
            logger.verbose('gallery root')
        },
    },
]

const onLocationChange = ({ payload }) => (dispatch) => {
    const { pathname } = payload

    try {
        const { action, match } = routes
            .map(route => ({
                ...route,
                match: route.test.match(pathname),
            }))
            .filter(route => route.match)
            .shift()

        if (action) {
            dispatch(action(match))
        }
    } catch (e) {
        logger.verbose('Path handler not found for:', pathname)
    }
}

export default [
    {
        action: '@@router/LOCATION_CHANGE',
        handler: onLocationChange,
    },
]
