import { connect } from 'react-redux';
import ImageShow from './ImageShow';

const mapStateToProps = (state: any) => {
  const image = state.entities.unsplash[state.ui.modal.externalModal];
  return {
    image,
  };
};

export default connect(mapStateToProps, null)(ImageShow);
