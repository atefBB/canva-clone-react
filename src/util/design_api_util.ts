export const fetchOwnedDesigns = () => (
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.ajax({
    url: '/api/designs/owned',
    method: 'GET',
  })
);

export const fetchTemplates = () => (
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.ajax({
    url: '/api/designs/templates',
    method: 'GET',
  })
);

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const fetchDesign = (designId: any) => $.ajax({
  url: `/api/designs/${designId}`,
  method: 'GET',
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const createDesign = (design: any) => $.ajax({
  url: '/api/designs',
  method: 'POST',
  data: { design },
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const updateDesign = (design: any) => $.ajax({
  url: `/api/designs/${design.id}`,
  method: 'PATCH',
  data: { design },
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const deleteDesign = (designId: any) => $.ajax({
  url: `/api/designs/${designId}`,
  method: 'DELETE',
});
