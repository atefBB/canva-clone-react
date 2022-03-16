import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { withRouter } from 'react-router-dom';
import { FiChevronLeft, FiSave, FiRefreshCw } from 'react-icons/fi';
import styles from './EditorNav.module.css';

const EditorNav = ({
  updateDesign,
  loading,
  history
}: any) => (
  <div className={styles.editorNav}>
    <nav className={styles.leftNav}>
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; to: string; className: ... Remove this comment to see the full error message
      <div to="/" className={loading ? 'disabled' : ''}>
        <button type="button" className="btn-icon btn-editor" disabled={loading} onClick={() => { history.goBack(); }}>
          <FiChevronLeft />
          Home
        </button>
      </div>
      {/* <button type="button" className="btn-icon">
        File
      </button>
      <button type="button" className="btn-icon">
        Resize
      </button> */}

    </nav>
    <nav className={styles.rightNav}>
      <button type="button" className="btn-icon btn-editor" onClick={updateDesign} disabled={loading}>
        {loading ? <FiRefreshCw className="spin" /> : (
          <>
            <FiSave />
            <span className="ml-4">Save</span>
          </>
        )}
      </button>
    </nav>
  </div>
);

export default withRouter(EditorNav);
