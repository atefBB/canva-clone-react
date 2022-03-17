import React from "react";
import { Link } from "react-router-dom";
import {
  FiTrash2,
  FiFolder,
  FiLink,
  FiEyeOff,
  FiEye,
  FiDownload,
  FiRotateCcw,
} from "react-icons/fi";

import styles from "./IndexItemDropdown.module.css";

class IndexItemDropdown extends React.Component {
  constructor(props: any) {
    super(props);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'design' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { design } = this.props;
    this.state = {
      animate: false,
      title: design.title,
      move: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePublic = this.togglePublic.bind(this);
    this.toggleTrash = this.toggleTrash.bind(this);
    this.toggleMove = this.toggleMove.bind(this);
    this.deleteDesign = this.deleteDesign.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
  }

  componentWillUnmount() {
    this.handleSubmit();
  }

  handleChange(form: any) {
    return (e: any) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  handleSubmit() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'updateDesign' does not exist on type 'Re... Remove this comment to see the full error message
    const { updateDesign, design } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { title } = this.state;
    if (design.title !== title) {
      updateDesign({ id: design.id, title });
    }
  }

  toggleMove() {
    this.setState({ move: true });
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'requestFolders' does not exist on type '... Remove this comment to see the full error message
    const { requestFolders } = this.props;
    requestFolders();
  }

  togglePublic() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'updateDesign' does not exist on type 'Re... Remove this comment to see the full error message
    const { updateDesign, design } = this.props;
    updateDesign({ id: design.id, public: !design.public });
  }

  toggleTrash() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'updateDesign' does not exist on type 'Re... Remove this comment to see the full error message
    const { updateDesign, design } = this.props;
    updateDesign({ id: design.id, trash: !design.trash });
  }

  deleteDesign() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'deleteDesign' does not exist on type 'Re... Remove this comment to see the full error message
    const { deleteDesign, design } = this.props;
    deleteDesign(design.id);
  }

  changeFolder(folderId: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'updateDesign' does not exist on type 'Re... Remove this comment to see the full error message
    const { updateDesign, design, toggleDropdown } = this.props;
    updateDesign({ id: design.id, folderId }).then(toggleDropdown());
  }

  // createDesign(item) {
  //   const { createDesign, currentUser, requestDesign, history, design, elements } = this.props;
  //   const newDesign = {
  //     creatorId: currentUser.id,
  //     title: item.name,
  //     description: item.description,
  //     public: false,
  //     width: item.width,
  //     height: item.height,
  //   };
  //   requestDesign(item.id).then(() => {
  //     debugger;
  //   });

  //   createDesign(design).then((res) => {
  //     history.push(`/design/${res.payload.design.id}`);
  //   });
  // }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'animate' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { animate, title, move } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'design' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { design, folders, currentUser, direction } = this.props;
    if (design.userId !== currentUser.id) {
      return (
        <div
          className={`${styles.dropdownCard} ${animate ? styles.animate : ""}`}
          style={{ right: `${direction ? -278 : 10}px` }}
        >
          <ul className={styles.dropDown}>
            <li className={styles.title}>
              <h2>{design.title}</h2>
            </li>
            <li>
              <hr className={styles.hr} />
            </li>
            <a href={design.thumbnail} download>
              <li className={styles.listItem}>
                <FiDownload className={styles.icon} />
                <span className="ml-8">Download</span>
                <small className={styles.hidden}>Full size PNG</small>
              </li>
            </a>
            <Link to={`/view/${design.id}`}>
              <li className={styles.listItem}>
                <FiLink className={styles.icon} />
                <span className="ml-8">Get shareable link</span>
              </li>
            </Link>
          </ul>
        </div>
      );
    }
    if (move) {
      return (
        <div
          className={`${styles.dropdownCard} ${animate ? styles.animate : ""}`}
          style={{ right: `${direction ? -278 : 10}px` }}
        >
          <ul className={styles.dropDown}>
            <li className={styles.title}>
              <h2>{design.title}</h2>
            </li>
            <li>
              <hr className={styles.hr} />
            </li>
            {folders.map((folder: any) => (
              <li
                className={styles.listItem}
                onClick={() => this.changeFolder(folder.id)}
              >
                <FiFolder className={styles.icon} />
                <span className="ml-8">{folder.name}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    if (design.trash) {
      return (
        <div
          className={`${styles.dropdownCard} ${animate ? styles.animate : ""}`}
          style={{ right: `${direction ? -278 : 10}px` }}
        >
          <ul className={styles.dropDown}>
            <li className={styles.title}>
              <h2>{design.title}</h2>
            </li>
            <li>
              <hr className={styles.hr} />
            </li>
            <li className={styles.listItem} onClick={this.toggleTrash}>
              <FiRotateCcw className={styles.icon} />
              <span className="ml-8">Restore</span>
            </li>
            <li className={styles.listItem} onClick={this.deleteDesign}>
              <FiTrash2 className={styles.icon} />
              <span className="ml-8">Permanently delete</span>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <div
        className={`${styles.dropdownCard} ${animate ? styles.animate : ""}`}
        style={{ right: `${direction ? -278 : 10}px` }}
      >
        <ul className={styles.dropDown}>
          <li className={styles.title}>
            <input
              className={styles.input}
              type="text"
              value={title}
              onChange={this.handleChange("title")}
              onBlur={this.handleSubmit}
            />
          </li>
          <li>
            <hr className={styles.hr} />
          </li>
          {/* <li className={styles.listItem} onClick={() => this.createDesign(design)}>
            <FiCopy className={styles.icon} />
            <span className="ml-8">Make a copy</span>
          </li> */}
          <li className={styles.listItem} onClick={this.togglePublic}>
            {design.public ? (
              <>
                <FiEyeOff className={styles.icon} />
                <span className="ml-8">Make design private</span>
              </>
            ) : (
              <>
                <FiEye className={styles.icon} />
                <span className="ml-8">Make design public</span>
              </>
            )}
          </li>
          <li className={styles.listItem} onClick={this.toggleMove}>
            <FiFolder className={styles.icon} />
            <span className="ml-8">Move to folder</span>
          </li>
          <a href={design.thumbnail} download>
            <li className={styles.listItem}>
              <FiDownload className={styles.icon} />
              <span className="ml-8">Download</span>
              <small className={styles.hidden}>Full size PNG</small>
            </li>
          </a>
          <Link to={`/view/${design.id}`}>
            <li className={styles.listItem}>
              <FiLink className={styles.icon} />
              <span className="ml-8">Get shareable link</span>
            </li>
          </Link>
          <li className={styles.listItem} onClick={this.toggleTrash}>
            <FiTrash2 className={styles.icon} />
            <span className="ml-8">Move to Trash</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default IndexItemDropdown;
