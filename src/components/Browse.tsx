import React from "react";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBar from "./NavBar";
import BrowseIndexContainer from "./browse/browse_index_container";
import UploadedImageModalContainer from "./modal/uploaded_image_modal_container";
import { MainAuth } from "./auth/MainAuth";

import styles from "./Browse.module.css";

const Browse = ({ mode, sessionId, toggleModal, uploadedModal }: any) => (
  <React.Fragment>
    <div
      className={
        uploadedModal
          ? `${styles.container} ${styles.blurred}`
          : styles.container
      }
    >
      <NavBar mode={mode} />
      {!sessionId ? (
        <div className={mode === "splash" ? "container" : "container-wide"}>
          {/* @ts-expect-error */}
          <AuthRoute path="/" component={MainAuth} />
        </div>
      ) : null}
      {/* @ts-expect-error */}
      <ProtectedRoute path="/" component={BrowseIndexContainer} />
    </div>
    <UploadedImageModalContainer
      // @ts-expect-error
      active={uploadedModal}
      toggleModal={(id: any) => toggleModal("uploadedModal", id)}
    />
  </React.Fragment>
);

export default Browse;
