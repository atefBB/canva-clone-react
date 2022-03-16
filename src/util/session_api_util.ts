// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const signup = (user: any) => $.ajax({
  url: '/api/users',
  method: 'POST',
  data: { user },
});

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const login = (user: any) => $.ajax({
  url: '/api/session',
  method: 'POST',
  data: { user },
});

export const logout = () => (
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
);
