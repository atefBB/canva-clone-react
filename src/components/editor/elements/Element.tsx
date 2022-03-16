import React from 'react';
import Shape from './Shape';
import Text from './Text';
import Image from './Image';
import styles from './Element.module.css';

const components = {
  Shape,
  Text,
  Image,
};

const Element = ({
  element,
  zoom
}: any) => {
  const { transparency } = element;
  return (
    <div
      className={`${styles.element} no-cursor`}
      style={{ opacity: transparency, height: element.elementableAttributes.height * zoom, width: element.elementableAttributes.width * zoom }}
    >
      {React.createElement(
        // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        components[element.elementableType],
        { elementAttr: element.elementableAttributes, zoom },
        null,
      )}
    </div>
  );
};

export default Element;
