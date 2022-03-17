import React from "react";

import styles from "./ElementsDrawer.module.css";
import scrollbar from "./scrollbar.module.css";

class ElementsDrawer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { info: false };
  }

  addElement(shape: any) {
    // @ts-expect-error
    const { addElement } = this.props;
    const element = {
      elementableType: "Shape",
      transparency: 1,
      zIndex: 0,
      posX: 0,
      posY: 0,
      elementableAttributes: {
        shape,
        color: "#c7d0d8",
        width: 500,
        height: 500,
      },
    };
    addElement(element);
  }

  render() {
    const mockupResponse = [
      // need default width height and desc to search
      // @ts-expect-error
      { id: 1, shape: "circle", url: window.circle },
      // @ts-expect-error
      { id: 2, shape: "rectangle", url: window.rectangle },
      // @ts-expect-error
      { id: 3, shape: "triangle", url: window.triangle },
      // @ts-expect-error
      { id: 4, shape: "hexagon", url: window.hexagon },
      // @ts-expect-error
      { id: 5, shape: "pentagon", url: window.pentagon },
      // @ts-expect-error
      { id: 6, shape: "rounded-square", url: window.roundedSquare },
      // @ts-expect-error
      { id: 7, shape: "heart", url: window.heart },
      // @ts-expect-error
      { id: 8, shape: "star", url: window.star },
      // @ts-expect-error
      { id: 9, shape: "right-triangle", url: window.rightTriangle },
    ];
    return (
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
    );
  }
}

export default ElementsDrawer;
