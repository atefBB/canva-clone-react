import * as UnsplashAPIUtil from '../util/unsplash_api_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_UNSPLASH_SEARCH_IMAGES = 'RECEIVE_UNSPLASH_SEARCH_IMAGES';
export const RECEIVE_UNSPLASH_POPULAR_IMAGES = 'RECEIVE_UNSPLASH_POPULAR_IMAGES';
export const RECEIVE_UNSPLASH_ERRORS = 'RECEIVE_UNSPLASH_ERRORS';

const receiveUnsplashSearchImages = (images: any) => ({
  type: RECEIVE_UNSPLASH_SEARCH_IMAGES,
  images
});

const receiveUnsplashPopularImages = (images: any) => ({
  type: RECEIVE_UNSPLASH_POPULAR_IMAGES,
  images
});

const receiveUnsplashErrors = (errors: any) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const fetchUnsplashQuery = (page: any, query: any) => (dispatch: any) => UnsplashAPIUtil.fetchUnsplashQuery(page, query)
  .then((res: any) => dispatch(receiveUnsplashSearchImages(res.results)),
    (res: any) => dispatch(receiveUnsplashErrors(res)));

export const fetchUnsplashPopular = (page: any) => (dispatch: any) => UnsplashAPIUtil.fetchUnsplashPopular(page)
  .then((res: any) => dispatch(receiveUnsplashPopularImages(res)),
    (res: any) => dispatch(receiveUnsplashErrors(res)));
