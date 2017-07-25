import React from 'react'

import Coffee from 'Components/Coffee'

const StyleGuideComponent = () => (
    <div className={'styleguide-module'}>
        <div className={'styleguide-section'}>
            <h3>Coffee styleguide</h3>
            <Coffee />
        </div>
        <div className={'styleguide-section'}>
            <h3>Coffee different sizes</h3>
            10: <Coffee size={10} /><br />
            40: <Coffee size={40} /><br />
            80: <Coffee size={80} /><br />
        </div>
    </div>
)

export default StyleGuideComponent
