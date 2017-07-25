
import Gallery from './Gallery'
import galleryReducer from './reducers/gallery-reducer'
import gallerySaga from './sagas/gallery-saga'

export const route = {
    component: Gallery,
    reducers: {
        gallery: galleryReducer,
    },
    sagas: [
        gallerySaga,
    ],
}

export default route
