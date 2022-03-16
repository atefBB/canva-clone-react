import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
import { requestTemplates } from '../../actions/design_actions';

const mapStateToProps = (state: any) => {
  const designs = Object.values(state.entities.designs);
  return {
    folder: { name: 'All public designs' },
    // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
    designs: designs.filter((design) => design.public && !design.trash),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  requestDesigns: () => dispatch(requestTemplates())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
