import React from 'react';
import DesignIndexItem from './DesignIndexItem';
import styles from './AllDesigns.module.css';

class AllDesigns extends React.Component {
  componentDidMount() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'requestDesigns' does not exist on type '... Remove this comment to see the full error message
    const { requestDesigns } = this.props;
    requestDesigns();
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'designs' does not exist on type 'Readonl... Remove this comment to see the full error message
    const { designs, folder } = this.props;
    if (!folder) return null;
    return (
      <div className={styles.indexArea}>
        <h1 className={styles.indexTitle}>{folder.name}</h1>
        {designs.length === 0 ? (
          <div className="grey">
            <h2>This folder is empty.</h2>
          </div>
        ) : (
          <div className={styles.masonry}>
            {designs.map((design: any) => <div
              key={design.id}
              className={styles.masonItem}
              style={{
                flexGrow: (design.width * 100) / design.height,
                flexBasis: (design.width * 240) / design.height,
              }}
            >
              <i style={{ paddingBottom: `${(design.height / design.width) * 100.0}%` }} />
              // @ts-expect-error ts-migrate(2322) FIXME: Type '{ design: any; }' is not assignable to type ... Remove this comment to see the full error message
              <DesignIndexItem design={design} />
            </div>)}
          </div>
        )}
      </div>
    );
  }
}

export default AllDesigns;
