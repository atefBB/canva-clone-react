import React from 'react';
import Element from './elements/Element';
import styles from './Viewer.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Viewer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { zoom: 1 };
  }

  componentDidMount() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'requestDesign' does not exist on type 'R... Remove this comment to see the full error message
    const { requestDesign } = this.props;
    requestDesign();
  }

  render() {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'elements' does not exist on type 'Readon... Remove this comment to see the full error message
    const { elements, design } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'zoom' does not exist on type 'Readonly<{... Remove this comment to see the full error message
    const { zoom } = this.state;
    if (elements.length === 0) return null;
    return (
      <div
        id="viewer"
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        <div className={styles.elementsContainer}>
          {elements.map((element: any, index: any) => (
            <div
              key={element.id ? element.id : index}
              style={{
                position: 'absolute', zIndex: element.zIndex, left: element.posX * zoom, top: element.posY * zoom, transform: `rotate(${element.rotate}deg)`,
              }}
            >
              <Element element={element} zoom={zoom} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Viewer;
