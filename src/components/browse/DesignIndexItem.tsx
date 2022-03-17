import React from "react";
import { Link } from "react-router-dom";
import { FiMoreHorizontal, FiEye } from "react-icons/fi";

import IndexItemDropdownContainer from "./index_item_dropdown_container";
import ImageDropdownContainer from "./image/upload_dropdown_container";

import styles from "./DesignIndexItem.module.css";
// eslint-disable-next-line react/prefer-stateless-function
class DesignIndexItem extends React.Component {
  wrapperRef: any;
  constructor(props: any) {
    super(props);
    this.state = { dropdown: false, direction: true };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node: any) {
    this.wrapperRef = node;
  }

  toggleDropdown(event: any) {
    // console.log(event.clientX, event.clientY)
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'dropdown' does not exist on type 'Readon... Remove this comment to see the full error message
    const { dropdown } = this.state;
    this.setState({ dropdown: !dropdown, direction: event.clientX < 574 });
  }

  handleClickOutside(event: any) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ dropdown: false });
    }
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'design' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { design, image, temp, toggleModal } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'dropdown' does not exist on type 'Readon... Remove this comment to see the full error message
    const { dropdown, direction } = this.state;
    return (
      <div className={styles.card} ref={this.setWrapperRef}>
        <div className={styles.thumb}>
          {design ? (
            <Link to={`/design/${design.id}`}>
              <div className={styles.imageBorder}>
                <img src={design.thumbnail} alt="" />
              </div>
            </Link>
          ) : (
            <div
              className={styles.imageBorder}
              onClick={() => !temp && toggleModal(image.id)}
              // @ts-expect-error ts-migrate(2339)
              style={{ backgroundImage: `url(${window.transparent})` }}
            >
              <img src={image.url} className={temp && styles.tempImg} alt="" />
            </div>
          )}
        </div>
        <div className={styles.title}>
          {design && design.public ? <FiEye /> : ""}
          {design ? design.title : image.title}
        </div>
        {temp ? (
          <div className={styles.loaderWrap}>
            <div className={styles.loader} />
          </div>
        ) : (
          <div className={styles.wrap}>
            <div
              className={`${styles.toggle} ${dropdown ? styles.active : ""}`}
            >
              <button
                type="button"
                className="btn-item"
                onClick={this.toggleDropdown}
              >
                <FiMoreHorizontal />
              </button>
            </div>
          </div>
        )}
        {design && dropdown ? (
          <IndexItemDropdownContainer
            design={design}
            toggleDropdown={this.toggleDropdown}
            direction={direction}
          />
        ) : (
          ""
        )}
        {image && dropdown ? (
          <ImageDropdownContainer
            image={image}
            toggleDropdown={this.toggleDropdown}
            direction={direction}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default DesignIndexItem;
