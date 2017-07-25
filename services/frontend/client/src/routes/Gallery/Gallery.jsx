import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import GalleryView from './components/GalleryView'
import GalleryMenu from './components/GalleryMenu'

export const renderMenu = (images) => {
    if (!images.length) {
        return <div>{'loading menu...'}</div>
    }

    return <GalleryMenu images={images} />
}

export const renderBody = image => (
    <Route
      path={'/gallery/:id'}
      render={() => <GalleryView image={image} />}
    />
)

export const mapState2Props = ({ gallery }) => ({
    menu: renderMenu(gallery.images),
    body: renderBody(gallery.active),
})

const Gallery = ({ menu, body }) => (
    <div>
        <h3>{'Photogallery'}</h3>
        {menu}
        <hr />
        {body}
    </div>
)

Gallery.propTypes = {
    menu: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    body: PropTypes.element.isRequired,
}

export default connect(mapState2Props)(Gallery)
