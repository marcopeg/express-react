import React from 'react'
import PropTypes from 'prop-types'

const GalleryView = ({ image }) => {
    if (image) {
        return (
            <img
              role={'presentation'}
              src={image.file}
              style={{ maxWidth: '100%' }}
            />
        )
    }

    return <span>{'loading image...'}</span>
}

GalleryView.propTypes = {
    image: PropTypes.shape({
        thumb: PropTypes.string, // eslint-disable-line
    }),
}

export default GalleryView
