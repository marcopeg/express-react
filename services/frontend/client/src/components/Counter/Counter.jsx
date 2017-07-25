import React, { Component } from 'react'

import './Counter.global.css'
import cssStyles from './Counter.module.css'

import './Counter.global.styl'
import stylusStyles from './Counter.module.styl'

export default class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    componentDidMount () {
        console.log('mount counter') // eslint-disable-line
        this.interval = setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount () {
        console.log('unmount counter') // eslint-disable-line
        clearInterval(this.interval)
    }

    tick () {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render () {
        return <h2 className={`counter counter-padding ${cssStyles.wrapper} ${stylusStyles.wrapper}`}>Counter: {this.state.counter}</h2>
    }
}
