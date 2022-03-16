import React from 'react';
import { FiX } from 'react-icons/fi';
import styles from './with_modal.module.css';

const withModal = (Component: any) => {
  return class extends React.Component {
    wrapperRef: any;
    constructor(props: any) {
      super(props);
      this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node: any) {
      this.wrapperRef = node;
    }

    handleClickOutside(event: any) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'toggleModal' does not exist on type 'Rea... Remove this comment to see the full error message
      const { toggleModal } = this.props;
      if (this.wrapperRef
        && !this.wrapperRef.contains(event.target)) {
        toggleModal(null);
      }
    }

    render() {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'active' does not exist on type 'Readonly... Remove this comment to see the full error message
      const { active, toggleModal, ...restProps } = this.props;
      if (!active) return null;
      return (
        <div className={styles.modalBackground}>
          <div ref={this.setWrapperRef} className={styles.wrapper}>
            <button type="button" className={styles.close} onClick={() => toggleModal(null)}>
              <FiX />
            </button>
            <Component {...restProps} toggleModal={toggleModal} />
          </div>
        </div>
      );
    }
  };
};

export default withModal;
