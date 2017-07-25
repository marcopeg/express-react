/* eslint global-require: off */

import React from 'react'

import GalleryMenu from './GalleryMenu'

const GalleryMenuStyleguide = () => {
    const testImages = [
        { id: 'a1', thumb: require('../../assets/desert-82403_1280_thumb.jpg') },
        { id: 'a2', thumb: require('../../assets/morocco-123976_1280_thumb.jpg') },
        { id: 'a3', thumb: require('../../assets/mountain-2143877_640_thumb.jpg') },
        { id: 'a4', thumb: require('../../assets/sand-dunes-691431_1280_thumb.jpg') },
    ]

    const testImagesALot = [
        { id: 'a1', thumb: require('../../assets/desert-82403_1280_thumb.jpg') },
        { id: 'a2', thumb: require('../../assets/morocco-123976_1280_thumb.jpg') },
        { id: 'a3', thumb: require('../../assets/mountain-2143877_640_thumb.jpg') },
        { id: 'a4', thumb: require('../../assets/sand-dunes-691431_1280_thumb.jpg') },
        { id: 'a5', thumb: require('../../assets/desert-82403_1280_thumb.jpg') },
        { id: 'a6', thumb: require('../../assets/morocco-123976_1280_thumb.jpg') },
        { id: 'a7', thumb: require('../../assets/mountain-2143877_640_thumb.jpg') },
        { id: 'a8', thumb: require('../../assets/sand-dunes-691431_1280_thumb.jpg') },
        { id: 'a9', thumb: require('../../assets/desert-82403_1280_thumb.jpg') },
        { id: 'a10', thumb: require('../../assets/morocco-123976_1280_thumb.jpg') },
        { id: 'a11', thumb: require('../../assets/mountain-2143877_640_thumb.jpg') },
        { id: 'a12', thumb: require('../../assets/sand-dunes-691431_1280_thumb.jpg') },
    ]

    return (
        <div className={'styleguide-module'}>
            <div className={'styleguide-section'}>
                <h3>No Images:</h3>
                <GalleryMenu images={[]} />
            </div>
            <div className={'styleguide-section'}>
                <h3>With Images:</h3>
                <GalleryMenu images={testImages} />
            </div>
            <div className={'styleguide-section'}>
                <h3>With A lot of Images:</h3>
                <GalleryMenu images={testImagesALot} />
            </div>
        </div>
    )
}

export default GalleryMenuStyleguide
