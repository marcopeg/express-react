/**
 * Application's routes configuration
 */

// @flow
import { $App } from 'express'

// import project's middlewares

import rootRouter from './root'

export default (app: $App) => {
    // client rendering
    app.use('/', rootRouter)
}
