export const TOGGLE_MODAL = 'TOGGLE_MODAL';

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'modal' implicitly has an 'any' type.
export const toggleModal = (modal, id) => ({
  type: TOGGLE_MODAL,
  modal,
  id
});
