import React from 'react';
import DrawerSearch from './DrawerSearch';
import styles from './ElementsDrawer.module.css';
import scrollbar from './scrollbar.module.css';


class ElementsDrawer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { info: false };
  }

  addElement(shape: any) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'addElement' does not exist on type 'Read... Remove this comment to see the full error message
    const { addElement } = this.props;
    const element = {
      elementableType: 'Shape',
      transparency: 1,
      zIndex: 0,
      posX: 0,
      posY: 0,
      // _destroy: true
      elementableAttributes: {
        shape, color: '#c7d0d8', width: 500, height: 500,
      },
    };
    addElement(element);
  }

  render() {
    const mockupResponse = [ // need default width height and desc to search
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'circle' does not exist on type 'Window &... Remove this comment to see the full error message
      { id: 1, shape: 'circle', url: window.circle },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'rectangle' does not exist on type 'Windo... Remove this comment to see the full error message
      { id: 2, shape: 'rectangle', url: window.rectangle },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'triangle' does not exist on type 'Window... Remove this comment to see the full error message
      { id: 3, shape: 'triangle', url: window.triangle },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'hexagon' does not exist on type 'Window ... Remove this comment to see the full error message
      { id: 4, shape: 'hexagon', url: window.hexagon },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'pentagon' does not exist on type 'Window... Remove this comment to see the full error message
      { id: 5, shape: 'pentagon', url: window.pentagon },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'roundedSquare' does not exist on type 'W... Remove this comment to see the full error message
      { id: 6, shape: 'rounded-square', url: window.roundedSquare },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'heart' does not exist on type 'Window & ... Remove this comment to see the full error message
      { id: 7, shape: 'heart', url: window.heart },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'star' does not exist on type 'Window & t... Remove this comment to see the full error message
      { id: 8, shape: 'star', url: window.star },
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'rightTriangle' does not exist on type 'W... Remove this comment to see the full error message
      { id: 9, shape: 'right-triangle', url: window.rightTriangle },
    ];
    return (
      <>
        {/* <DrawerSearch placeholder="Search icons and shapes" /> */}
        <div className={scrollbar.customScroll}>
          <div className={styles.elementsDrawer}>
            <div className={styles.itemList}>
              {mockupResponse.map((item) => (
                <div
                  key={item.id}
                  className={styles.item}
                  onClick={() => this.addElement(item.shape)}
                >
                  <svg>
                    <use href={item.url} />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ElementsDrawer;
