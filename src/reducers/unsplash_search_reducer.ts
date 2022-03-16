import { RECEIVE_UNSPLASH_SEARCH_IMAGES } from '../actions/unsplash_actions';

const unsplashSearchReducer = (state = [], action: any) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UNSPLASH_SEARCH_IMAGES:
      return action.images.map((image: any) => image.id);
    default:
      return state;
  }
};

export default unsplashSearchReducer;
