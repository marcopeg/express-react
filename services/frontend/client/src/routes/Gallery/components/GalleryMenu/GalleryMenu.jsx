import React from 'react'
import PropTypes from 'prop-types'

import GalleryThumb from '../GalleryThumb'
import styles from './GalleryMenu.module.styl'

const GalleryMenu = ({ images }) => (
    <div className={styles.wrapper}>
        {images
            .filter((_, index) => index < 6)
            .map(image =>
                <GalleryThumb key={image.id} {...image} />
            )
        }
    </div>
)

GalleryMenu.propTypes = {
    images: PropTypes.array.isRequired, // eslint-disable-line
}

export default GalleryMenu
