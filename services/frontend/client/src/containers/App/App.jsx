// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Route, Link } from 'react-router-dom'

import renderAboutPage from 'Routes/AboutPage'
import renderGallery from 'Routes/Gallery'
import Layout from 'Layouts/DefaultLayout'
import Counter from 'Components/Counter'
import DateTime from 'Components/DateTime'
import Coffee from 'Components/Coffee'

const App = ({ appName, clockTime }) => (
    <Layout>
        <h2>{appName}</h2>
        <Counter />
        <DateTime value={clockTime} />
        <Coffee />
        <hr />
        <Link to={'/about'}>About</Link>
        <Link to={'/gallery'}>Gallery</Link>
        <hr />
        <Route path={'/about'} render={renderAboutPage} />
        <Route path={'/gallery'} render={renderGallery} />
    </Layout>
)

App.propTypes = {
    appName: PropTypes.string.isRequired,
    clockTime: PropTypes.number.isRequired,
}

const mapState2Props = ({ settings, clock }) => ({
    appName: settings.name,
    clockTime: clock,
})

export default withRouter(connect(mapState2Props)(App))
