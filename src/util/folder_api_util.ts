export const fetchFolders = () => (
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.ajax({
    url: '/api/folders',
    method: 'GET',
  })
);

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const fetchFolder = (folderId: any) => $.ajax({
  url: `/api/folders/${folderId}`,
  method: 'GET',
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const createFolder = (folder: any) => $.ajax({
  url: '/api/folders',
  method: 'POST',
  data: { folder },
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const updateFolder = (folder: any) => $.ajax({
  url: `/api/folders/${folder.id}`,
  method: 'PATCH',
  data: { folder },
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const deleteFolder = (folderId: any) => $.ajax({
  url: `/api/folders/${folderId}`,
  method: 'DELETE',
});
