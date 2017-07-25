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

        // Init services
        await initVendorSrc()
        await initServer({
            serverName: String(getConfig('SERVER_NAME')),
        })

        // Start services
        await startServer({
            port: Number(getConfig('SERVER_PORT')),
        })

        winston.info('Up and running...')
    } catch (e) {
        winston.error('Startup error')
        winston.error(e)
        process.exit(1)
    }
}
