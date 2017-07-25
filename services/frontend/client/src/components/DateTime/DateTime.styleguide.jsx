import React from 'react'
import DateTime from 'Components/DateTime'

const DateTimeStyleguide = () => (
    <div className={'styleguide-module'}>
        <div className={'styleguide-section'}>
            <h3>datetime styleguide:</h3>
            <DateTime value={Date.now()} />
        </div>
        <div className={'styleguide-section'}>
            <h3>since beginning of time:</h3>
            <DateTime value={0} />
        </div>
    </div>
)

export default DateTimeStyleguide
