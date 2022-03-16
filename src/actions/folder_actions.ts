import * as FolderAPIUtil from '../util/folder_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_FOLDER = 'RECEIVE_FOLDER';
export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';

const receiveFolder = (payload: any) => ({
  type: RECEIVE_FOLDER,
  payload
});

const receiveFolders = (folders: any) => ({
  type: RECEIVE_FOLDERS,
  folders
});

const removeFolder = (payload: any) => ({
  type: REMOVE_FOLDER,
  payload
});

export const requestFolder = (folderId: any) => (dispatch: any) => FolderAPIUtil.fetchFolder(folderId)
  .then((payload: any) => dispatch(receiveFolder(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const requestFolders = () => (dispatch: any) => FolderAPIUtil.fetchFolders()
  .then((folders: any) => dispatch(receiveFolders(folders)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const createFolder = (folderParams: any) => (dispatch: any) => FolderAPIUtil.createFolder(folderParams)
  .then((payload: any) => dispatch(receiveFolder(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const updateFolder = (folderParams: any) => (dispatch: any) => FolderAPIUtil.updateFolder(folderParams)
  .then((payload: any) => dispatch(receiveFolder(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const deleteFolder = (folderId: any) => (dispatch: any) => FolderAPIUtil.deleteFolder(folderId)
  .then((payload: any) => dispatch(removeFolder(payload)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));
