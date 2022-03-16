import * as DesignAPIUtil from '../util/design_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_DESIGNS = 'RECEIVE_DESIGNS';
export const RECEIVE_DESIGN = 'RECEIVE_DESIGN';
export const REMOVE_DESIGN = 'REMOVE_DESIGN';

const receiveDesign = (payload: any) => ({
  type: RECEIVE_DESIGN,
  payload
});

const receiveDesigns = (designs: any) => ({
  type: RECEIVE_DESIGNS,
  designs
});

const removeDesign = (payload: any) => ({
  type: REMOVE_DESIGN,
  payload
});

export const requestDesign = (designId: any) => (dispatch: any) => DesignAPIUtil.fetchDesign(designId)
  .then((payload: any) => dispatch(receiveDesign(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const requestOwnedDesigns = () => (dispatch: any) => DesignAPIUtil.fetchOwnedDesigns()
  .then((designs: any) => dispatch(receiveDesigns(designs)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const requestTemplates = () => (dispatch: any) => DesignAPIUtil.fetchTemplates()
  .then((designs: any) => dispatch(receiveDesigns(designs)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const createDesign = (formDesign: any) => (dispatch: any) => DesignAPIUtil.createDesign(formDesign)
  .then((payload: any) => dispatch(receiveDesign(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const updateDesign = (formDesign: any) => (dispatch: any) => DesignAPIUtil.updateDesign(formDesign)
  .then((payload: any) => dispatch(receiveDesign(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const deleteDesign = (designId: any) => (dispatch: any) => DesignAPIUtil.deleteDesign(designId)
  .then((payload: any) => dispatch(removeDesign(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));
