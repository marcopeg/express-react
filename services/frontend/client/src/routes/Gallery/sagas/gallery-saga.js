// @flow

import pathToRegexp from 'path-to-regexp'
import { select, put, takeEvery } from 'redux-saga/effects'

import pause from 'Lib/pause'

import { setImages, setActive } from '../reducers/gallery-reducer'

import img1 from '../assets/desert-82403_1280.jpg'
import img1t from '../assets/desert-82403_1280_thumb.jpg'
import img2 from '../assets/morocco-123976_1280.jpg'
import img2t from '../assets/morocco-123976_1280_thumb.jpg'
import img3 from '../assets/mountain-2143877_640.jpg'
import img3t from '../assets/mountain-2143877_640_thumb.jpg'
import img4 from '../assets/sand-dunes-691431_1280.jpg'
import img4t from '../assets/sand-dunes-691431_1280_thumb.jpg'

const loadImageRe = pathToRegexp('/gallery/:id')

function* fetchImages () {
    yield pause(750)
    yield put(setImages([
        { id: 'a1', file: img1, thumb: img1t },
        { id: 'a2', file: img2, thumb: img2t },
        { id: 'a3', file: img3, thumb: img3t },
        { id: 'a4', file: img4, thumb: img4t },
    ]))
}

// Investigate the current path to define whether to load an image detail
// payload from the server or not
function* detectActiveImageChange () {
    const currentUri = yield select(({ routing }) => routing.location.pathname)
    const match = loadImageRe.exec(currentUri)
    if (!match) return

    const imageId = match['1']
    const current = yield select(({ gallery }) => gallery.active)
    if (current !== null && current.id === imageId) return

    yield loadImage(imageId)
}

function* loadImage (imageId) {
    yield put(setActive(null))
    const images = yield select(({ gallery }) => gallery.images)
    const next = images.filter($ => $.id === imageId).shift()
    yield pause(750)
    yield put(setActive(next))
}

function* initGallerySaga (): any {
    yield fetchImages()

    // Detect internal gellery route for loading custom data
    yield detectActiveImageChange()
    yield takeEvery('@@router/LOCATION_CHANGE', detectActiveImageChange)
}

export default initGallerySaga
