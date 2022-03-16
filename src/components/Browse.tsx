import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';
import MainAuth from './auth/MainAuth';
import BrowseIndexContainer from './browse/browse_index_container';
import styles from './Browse.module.css';
import ImageShow from './modal/ImageShow';
import UploadedImageModalContainer from './modal/uploaded_image_modal_container';

const Browse = ({
  mode,
  sessionId,
  toggleModal,
  uploadedModal
}: any) => (
  <>
    <div className={uploadedModal ? `${styles.container} ${styles.blurred}` : styles.container}>
      <NavBar mode={mode} />
      {!sessionId ? (
        <div className={mode === 'splash' ? 'container' : 'container-wide'}>
          <AuthRoute path="/" component={MainAuth} />
        </div>
      ) : null}
      <ProtectedRoute path="/" component={BrowseIndexContainer} />
    </div>
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ active: any; toggleModal: (id: any) => any... Remove this comment to see the full error message
    <UploadedImageModalContainer active={uploadedModal} toggleModal={(id: any) => toggleModal('uploadedModal', id)} />
  </>
);

export default Browse;
