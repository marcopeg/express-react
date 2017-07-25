// @flow
import React from 'react'
import PropTypes from 'prop-types'

// Import global CSS definitions
// $FlowFixMe
import './DateTime.global.styl'

// Import CSS module class names
// $FlowFixMe
import styles from './DateTime.module.styl'

const getWrapperClasses = () =>
    [ styles['date-time'], 'date-time' ].join(' ')

// Do we really need moment.js for this?
export const formatTime = (ts: number): string => {
    const date = new Date(ts)
    const hours = date.getHours()
    const minutes = `0${date.getMinutes()}`
    const seconds = `0${date.getSeconds()}`
    return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}

const DateTime = ({ value }: { value: number }) => (
    <span className={getWrapperClasses()}>
        <span className="glyphicon glyphicon-time" aria-hidden="true" />
        <span className={styles.value}>{formatTime(value)}</span>
    </span>
)

DateTime.propTypes = {
    value: PropTypes.number.isRequired,
}

export default DateTime
