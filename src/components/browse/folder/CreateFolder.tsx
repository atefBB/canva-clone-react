import React from 'react';
import styles from './CreateFolder.module.css';

class CreateFolder extends React.Component {
  constructor(props: any) {
    super(props);
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'folder' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { folder } = this.props;
    this.state = {
      animate: false, name: folder.name,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteFolder = this.deleteFolder.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
  }

  handleSubmit(e: any) {
    e.preventDefault();
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'name' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { name } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'action' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { action, toggleModal, folder } = this.props;
    action({ id: folder.id, name }).then(toggleModal);
  }

  handleChange(form: any) {
    return (e: any) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  deleteFolder() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'folder' does not exist on type 'Readonly... Remove this comment to see the full error message
    const { folder, deleteFolder, toggleModal } = this.props;
    deleteFolder(folder.id).then(toggleModal);
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'animate' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { animate, name } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'formType' does not exist on type 'Readon... Remove this comment to see the full error message
    const { formType } = this.props;
    return (
      <div className={`${styles.dropdownCard} ${animate ? styles.animate : ''}`}>
        <ul className={styles.createDropDown}>
          <form className={styles.customForm}>
            <li className={styles.title}>
              <h2>{formType}</h2>
            </li>
            <li className={styles.custom}>
              <input
                type="text"
                name="name"
                placeholder="Folder Name"
                value={name}
                onChange={this.handleChange('name')}
              />
            </li>
            {formType === 'Edit Folder' ? (
              <li className={styles.submit}>
                <button type="button" className="btn-blue" onClick={this.deleteFolder}>
                  Delete Folder
                </button>
              </li>
            ) : ''}
            <li className={styles.submit}>
              <button type="submit" className="btn-blue" onClick={this.handleSubmit}>
                {formType}
              </button>
            </li>
          </form>
        </ul>
      </div>
    );
  }
}

export default CreateFolder;
