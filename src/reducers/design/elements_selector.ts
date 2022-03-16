const elementsOnDesign = (state: any, designId: any, copy = false) => {
  const design = state.entities.designs[designId];
  const map = design.elements.map((eleId: any) => {
    const element = { ...state.entities.elements[eleId] };
    // if (element) {
    //   switch (element.elementableType) {
    //     case 'Shape':
    //       element.elementableAttributes = state.entities.shapes[element.elementableId];
    //       break;
    //     case 'Text':
    //       element.elementableAttributes = state.entities.text[element.elementableId];
    //       break;
    //     default:
    //       break;
    //   }
    //   if (copy) {
    //     delete element.id;
    //     delete element.elementableId;
    //     delete element.elementableAttributes.id;
    //   }
    // }
    return element;
  });
  // @ts-expect-error ts-migrate(2367) FIXME: This condition will always return 'true' since the... Remove this comment to see the full error message
  return map.filter((el: any) => Object.keys(el) !== 0);
  // return map;
};

export default elementsOnDesign;
