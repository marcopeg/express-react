// @flow

import React from 'react'
import PropTypes from 'prop-types'

import Avatar from 'material-ui/Avatar'

import coffee from './coffee.jpg'

const Coffee = ({ size }: { size: number }) => (
    <Avatar src={coffee} size={size} />
)

Coffee.propTypes = {
    size: PropTypes.number,
}

Coffee.defaultProps = {
    size: 80,
}

export default Coffee
