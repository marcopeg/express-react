// @flow

import winston from 'winston'
import path from 'path'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'

// import project's libraries
import { get as getConfig } from '../lib/config'

// import project's middlewares
import keepCalmAndSlowDown from '../middlewares/keep-calm-and-slow-down'

// import project's routes
import rootRouter from '../routes/root'

const app = express()

export const init = async ({ serverName }: ServerInitParams) => {
    app.set('name', serverName)

    // development setup
    if (getConfig('NODE_ENV') === 'development') {
        winston.info('[development] setup cors')
        app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true,
        }))
    }

    // template engine
    app.set('views', path.join(__dirname, '..', 'views'))
    app.set('view engine', 'pug')

    // Compression
    if (getConfig('NODE_ENV') === 'production') {
        app.use(compression())
    }

    // static files
    if (getConfig('NODE_ENV') === 'production') {
        app.use(express.static(path.join(__dirname, '..', '..', 'react-www')))
    }
    app.use(express.static(path.join(__dirname, '..', '..', 'public')))

    // middlewares
    app.use('/api', bodyParser.json())
    app.use(keepCalmAndSlowDown())

    // routes
    app.use('/', keepCalmAndSlowDown(100), rootRouter)
}

export const start = async ({ port }: ServerStartParams) => {
    app.listen(port, () => {
        winston.info('%s running on port %s', app.get('name'), port)
    })
}
