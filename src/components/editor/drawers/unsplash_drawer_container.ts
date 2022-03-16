import { connect } from 'react-redux';
import UnsplashDrawer from './UnsplashDrawer';
import { toggleModal } from '../../../actions/modal_actions';
import { fetchUnsplashQuery, fetchUnsplashPopular } from '../../../actions/unsplash_actions';

const mapStateToProps = (state: any) => ({
  searchResults: state.ui.unsplashSearchResults.map((id: any) => state.entities.unsplash[id]),
  popularResults: state.ui.unsplashPopularResults.map((id: any) => state.entities.unsplash[id])
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUnsplashPopular: (page: any) => dispatch(fetchUnsplashPopular(page)),
  fetchUnsplashQuery: (page: any, query: any) => dispatch(fetchUnsplashQuery(page, query)),
  toggleModal: (id: any) => dispatch(toggleModal('externalModal', id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsplashDrawer);
