import React from 'react';
import styles from './ImageItem.module.css';
import { FiMoreHorizontal, FiEye } from 'react-icons/fi';

class ImageItem extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      dropDown: false,
    };
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'thumb' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { thumb, id, toggleModal, addElement, image } = this.props;
    return (
      <div className={styles.item}>
        <button type="button" className={styles.more} onClick={() => toggleModal(id)}>
          <FiMoreHorizontal />
        </button>
        <img src={thumb} className={styles.image} onClick={() => addElement(image)}alt="" />
      </div>
    );
  }
}

export default ImageItem;
