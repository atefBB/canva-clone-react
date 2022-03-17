import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

import styles from "./ImageItem.module.css";

class ImageItem extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      dropDown: false,
    };
  }

  render() {
    // @ts-expect-error
    const { thumb, id, toggleModal, addElement, image } = this.props;
    return (
      <div className={styles.item}>
        <button
          type="button"
          className={styles.more}
          onClick={() => toggleModal(id)}
        >
          <FiMoreHorizontal />
        </button>
        <img
          src={thumb}
          className={styles.image}
          onClick={() => addElement(image)}
          alt=""
        />
      </div>
    );
  }
}

export default ImageItem;
