import React from 'react';
import { FiTrash2, FiDownload } from 'react-icons/fi';
import styles from '../IndexItemDropdown.module.css';

// download original and trash

class ImageDropdown extends React.Component {
  constructor(props: any) {
    super(props);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'image' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { image } = this.props;
    this.state = {
      animate: false,
      title: image.title,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'updateImage' does not exist on type 'Rea... Remove this comment to see the full error message
    const { updateImage, image } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { title } = this.state;
    if (image.title !== title) {
      updateImage({ id: image.id, title });
    }
  }

  deleteUpload(id: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'deleteImage' does not exist on type 'Rea... Remove this comment to see the full error message
    const { deleteImage } = this.props;
    deleteImage(id);
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'direction' does not exist on type 'Reado... Remove this comment to see the full error message
    const { direction, image } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { title, animate } = this.state;
    return (
      <div className={`${styles.dropdownCard} ${animate ? styles.animate : ''}`} style={{ right: `${direction ? -278 : 10}px` }}>
        <ul className={styles.dropDown}>
          <li className={styles.title}>
            <input className={styles.input} type="text" value={title} onChange={this.handleChange('title')} onBlur={this.handleSubmit} />
          </li>
          <li>
            <hr className={styles.hr} />
          </li>
          <a href={image.url} download>
            <li className={styles.listItem}>
              <FiDownload className={styles.icon} />
              <span className="ml-8">Download</span>
              <small className={styles.hidden}>Original Image</small>
            </li>
          </a>
          <li className={styles.listItem} onClick={() => this.deleteUpload(image.id)}>
            <FiTrash2 className={styles.icon} />
            <span className="ml-8">Delete</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ImageDropdown;
