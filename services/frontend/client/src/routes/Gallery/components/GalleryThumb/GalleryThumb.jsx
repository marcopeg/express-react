import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import styles from './GalleryThumb.module.styl'

const GalleryThumb = ({ id, thumb }) => (
    <Link to={`/gallery/${id}`}>
        <img
          role={'presentation'}
          className={styles.wrapper}
          src={thumb}
          width={80}
          height={80}
        />
    </Link>
)

GalleryThumb.propTypes = {
    id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
}

export default GalleryThumb
