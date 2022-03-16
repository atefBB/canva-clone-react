import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
// import { requestOwnedDesigns } from '../../actions/design_actions';

const mapStateToProps = (state: any) => {
  // const designs = Object.values(state.entities.designs);
  return {
    folder: { name: 'Uploads' },
    designs: [],
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  // requestDesigns: () => dispatch(requestOwnedDesigns()),
  requestDesigns: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
