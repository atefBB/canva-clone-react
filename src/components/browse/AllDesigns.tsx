import React from "react";
import DesignIndexItem from "./DesignIndexItem";
import styles from "./AllDesigns.module.css";

class AllDesigns extends React.Component {
  componentDidMount() {
    // @ts-expect-error
    const { requestDesigns } = this.props;
    requestDesigns();
  }

  render() {
    // @ts-expect-error
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
            {designs.map((design: any) => (
              <div
                key={design.id}
                className={styles.masonItem}
                style={{
                  flexGrow: (design.width * 100) / design.height,
                  flexBasis: (design.width * 240) / design.height,
                }}
              >
                <i
                  style={{
                    paddingBottom: `${(design.height / design.width) * 100.0}%`,
                  }}
                />
                {/* @ts-expect-error ts-migrate(2322) */}
                <DesignIndexItem design={design} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AllDesigns;
