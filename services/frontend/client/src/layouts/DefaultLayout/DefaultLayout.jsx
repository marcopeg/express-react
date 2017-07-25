// @flow
import React from 'react'
import PropTypes from 'prop-types'

import Grid from 'react-bootstrap/lib/Grid'

// $FlowFixMe
import styles from './DefaultLayout.module.styl'

// import LoveLogo from './icons/love.svg'
import ReactLogo from './icons/react.svg'

const DefaultLayout = ({ children }: any) => (
    <Grid>
        {children}
        <div className={styles.footer}>
            <span>{'Made with '}</span>
            {/* <LoveLogo fill={'red'} /> */}
            {/* <span>{'and'}</span> */}
            <ReactLogo />
        </div>
    </Grid>
)

DefaultLayout.propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line
}

export default DefaultLayout
