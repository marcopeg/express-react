// @flow
/* eslint import/prefer-default-export: off */

import winston from 'winston'

import { init as initConfig, get as getConfig } from './lib/config'
import { init as initVendorSrc } from './services/vendor-src'
import { init as initServer, start as startServer } from './services/server'

export async function start (): any {
    try {
        await initConfig()
        winston.level = getConfig('LOG_LEVEL')
        winston.level = 'verbose'

        await initVendorSrc()
        await initServer({
            serverName: String(getConfig('SERVER_NAME')),
            cookieSecret: String(getConfig('SERVER_SECRET')),
        })

        winston.info('[boot] --> initialization completed with success :-)')

        winston.verbose('[boot] start ExpressJS')
        await startServer({
            port: Number(getConfig('SERVER_PORT')),
        })

        winston.info('[boot] --> services warm up completed with success :-)')
    } catch (err) {
        winston.error('[boot] FATAL ERROR :-(')
        winston.error(err.message)
        winston.debug(err)
        process.exit(1)
    }
}
