export const RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
export const RECEIVE_ELEMENT = 'RECEIVE_ELEMENT';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const CREATE_ELEMENT = 'CREATE_ELEMENT';

export const receiveElement = (element: any) => ({
  type: RECEIVE_ELEMENT,
  element
});

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'designId' implicitly has an 'any' type.
export const createElement = (designId, element) => ({
  type: CREATE_ELEMENT,
  designId,
  element
});

export const receiveElements = (elements: any) => ({
  type: RECEIVE_ELEMENTS,
  elements
});

export const removeElement = (element: any) => ({
  type: REMOVE_ELEMENT,
  element
});
