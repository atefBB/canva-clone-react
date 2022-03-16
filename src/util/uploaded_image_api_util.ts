export const fetchUserUploads = () => (
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.ajax({
    url: '/api/uploaded_images',
    method: 'GET',
  })
);

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const updateUpload = (uploadedImage: any) => $.ajax({
  url: `/api/uploaded_images/${uploadedImage.id}`,
  method: 'PATCH',
  data: { uploadedImage },
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const deleteUpload = (uploadedImageId: any) => $.ajax({
  url: `/api/uploaded_images/${uploadedImageId}`,
  method: 'DELETE',
});
