import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './DrawerSearch.module.css';

class DrawerSearch extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { queryString: '' };
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'placeholder' does not exist on type 'Rea... Remove this comment to see the full error message
    const { placeholder, handleSearch, value, handleSubmit, handleClear } = this.props;
    return (
      <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
          <div className={styles.searchInput}>
            <div className={styles.inputIcon}>
              <FiSearch />
              <input className={styles.input} type="text" placeholder={placeholder} onChange={handleSearch} value={value} />
            </div>
            <button className={value !== '' ? 'btn-none' : `btn-none ${styles.notVisible}`} type="button" onClick={handleClear}>
              <FiX />
            </button>
          </div>
          <button type="submit" className={styles.hiddenButton}>Search</button>
        </form>
      </div>
    );
  }
}

export default DrawerSearch;
