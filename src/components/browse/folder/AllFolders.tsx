import React from 'react';
import {
  FiGrid, FiUploadCloud, FiTrash2, FiHeart, FiStar, FiFolderPlus, FiMoreHorizontal,
} from 'react-icons/fi';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Link } from 'react-router-dom';
import CreateFolderContainer from './create_folder_container';
import EditFolderContainer from './edit_folder_container';
import styles from './AllFolders.module.css';

class AllFolders extends React.Component {
  wrapperRef: any;
  constructor(props: any) {
    super(props);
    this.state = { create: null };
    this.toggleModal = this.toggleModal.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'requestFolders' does not exist on type '... Remove this comment to see the full error message
    const { requestFolders } = this.props;
    requestFolders();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node: any) {
    this.wrapperRef = node;
  }

  toggleModal(what: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'create' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { create } = this.state;
    if (create === null) {
      this.setState({ create: what });
    } else {
      this.setState({ create: null });
    }
  }

  handleClickOutside(event: any) {
    if (this.wrapperRef
      && !this.wrapperRef.contains(event.target)) {
      this.setState({ create: null });
    }
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'create' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { create } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'folders' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { folders } = this.props;
    return <>
      <div className={`${styles.indexArea} ${create ? styles.blur : ''}`}>
        <h1 className={styles.indexTitle}>All your folders</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/folder/all-designs">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiGrid />
                </div>
                <span className="ml-16">All your designs</span>
              </button>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/folder/likes">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiHeart />
                </div>
                <span className="ml-16">Likes</span>
              </button>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/folder/uploads">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiUploadCloud />
                </div>
                <span className="ml-16">Uploads</span>
              </button>
            </Link>
          </li>
          {folders.map((folder: any) => <li className={styles.listItem} key={folder.id}>
            <Link to={`/folder/${folder.id}`}>
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiStar />
                </div>
                <span className="ml-16">{folder.name}</span>
              </button>
            </Link>
            <button type="button" className="btn-item btn-absolute" onClick={() => this.toggleModal(folder)}>
              <FiMoreHorizontal />
            </button>
          </li>)}
          <li className={styles.listItem}>
            <Link to="/folder/trash">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiTrash2 />
                </div>
                <span className="ml-16">Trash</span>
              </button>
            </Link>
          </li>
          <li className={styles.listItem}>
            <button type="button" className="btn-index btn-folder" onClick={() => this.toggleModal('create')}>
              <div className={`${styles.iconWrap} ${styles.create}`}>
                <FiFolderPlus />
              </div>
              <span className="ml-16">Create a folder</span>
            </button>
          </li>
        </ul>
      </div>
      {create
        ? (
          <div className={styles.modalWrap}>
            <div className={styles.boxWrap} ref={this.setWrapperRef}>
              {create === 'create'
                ? <CreateFolderContainer toggleModal={this.toggleModal} />
                : <EditFolderContainer toggleModal={this.toggleModal} folder={create} />}
            </div>
          </div>
        ) : ''}
    </>;
  }
}

export default AllFolders;
