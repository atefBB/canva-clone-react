import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
import { requestOwnedDesigns } from '../../actions/design_actions';

const mapStateToProps = (state: any) => {
  const designs = Object.values(state.entities.designs);
  return {
    folder: { name: 'All your designs' },
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    designs: designs.filter((design) => design.userId === state.session.id && !design.trash),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  requestDesigns: () => dispatch(requestOwnedDesigns())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
