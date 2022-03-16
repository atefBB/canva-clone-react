import * as UploadedImageAPIUtil from '../util/uploaded_image_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_USER_UPLOADS = 'RECEIVE_USER_UPLOADS';
export const RECEIVE_UPLOAD = 'RECEIVE_UPLOAD';
export const REMOVE_UPLOAD = 'REMOVE_UPLOAD';

export const receiveUpload = (payload: any) => ({
  type: RECEIVE_UPLOAD,
  payload
});

const removeUpload = (payload: any) => ({
  type: REMOVE_UPLOAD,
  payload
});

export const receiveUserUploads = (payload: any) => ({
  type: RECEIVE_USER_UPLOADS,
  payload
});

export const fetchUserUploads = () => (dispatch: any) => UploadedImageAPIUtil.fetchUserUploads()
  .then((payload: any) => dispatch(receiveUserUploads(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const updateUpload = (formUploadedImage: any) => (dispatch: any) => UploadedImageAPIUtil.updateUpload(formUploadedImage)
  .then((payload: any) => dispatch(receiveUpload(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const deleteUpload = (uploadedImageId: any) => (dispatch: any) => UploadedImageAPIUtil.deleteUpload(uploadedImageId)
  .then((payload: any) => dispatch(removeUpload(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));
