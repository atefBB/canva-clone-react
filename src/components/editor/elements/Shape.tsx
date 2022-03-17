import React from "react";

// const shapeGen = (shape) => <use href={window.circle} />;

const shapeGen = (shape: any) => {
  const mockupResponse = [
    // need default width height and desc to search
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'circle' does not exist on type 'Window &... Remove this comment to see the full error message
    { id: 1, shape: "circle", url: window.circle },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'rectangle' does not exist on type 'Windo... Remove this comment to see the full error message
    { id: 2, shape: "rectangle", url: window.rectangle },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'triangle' does not exist on type 'Window... Remove this comment to see the full error message
    { id: 3, shape: "triangle", url: window.triangle },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hexagon' does not exist on type 'Window ... Remove this comment to see the full error message
    { id: 4, shape: "hexagon", url: window.hexagon },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'pentagon' does not exist on type 'Window... Remove this comment to see the full error message
    { id: 5, shape: "pentagon", url: window.pentagon },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'roundedSquare' does not exist on type 'W... Remove this comment to see the full error message
    { id: 6, shape: "rounded-square", url: window.roundedSquare },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'heart' does not exist on type 'Window & ... Remove this comment to see the full error message
    { id: 7, shape: "heart", url: window.heart },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'star' does not exist on type 'Window & t... Remove this comment to see the full error message
    { id: 8, shape: "star", url: window.star },
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'rightTriangle' does not exist on type 'W... Remove this comment to see the full error message
    { id: 9, shape: "right-triangle", url: window.rightTriangle },
  ];
  for (const item of mockupResponse) {
    if (item.shape === shape) {
      return <use href={item.url} />;
    }
  }
};

// const shapeGen = (shape) => {
//   switch (shape) {
//     case 'rectangle':
//       return <rect width="100%" height="100%" />;
//     case 'circle':
//       // return <object data="./assets/mite-alt.svg" />;
//       return <use href="./assets/mite-alt.svg#haha" />;
//       // return <image xlinkHref="./assets/mite-alt.svg" alt="" />;
//       // return <ellipse cx="50%" cy="50%" rx="50%" ry="50%" />;
//     case 'triangle':
//       return (
//         <svg viewBox="0 0 500 433" preserveAspectRatio="none">
//           <path d="m0 433l250-433 250 433h-500z" />
//         </svg>
//       );
//     default:
//       return null;
//   }
// };

const Shape = ({
  elementAttr: { shape, width, height, color },

  zoom,
}: any) => (
  <svg
    width={width * zoom}
    height={height * zoom}
    className="cursor"
    style={{ fill: color }}
  >
    {shapeGen(shape)}
  </svg>
);

export default Shape;
