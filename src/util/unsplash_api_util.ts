// import cache from './unsplash_cache';

export const fetchUnsplashQuery = (page: any, query: any) => (
  // @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
  $.ajax({
    method: 'GET',
    url: 'https://api.unsplash.com/search/photos',
    data: {
      query,
      per_page: 20,
      page,
    },
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  })
);

// @ts-expect-error ts-migrate(2581) FIXME: Cannot find name '$'. Do you need to install type ... Remove this comment to see the full error message
export const fetchUnsplashPopular = (page: any) => $.ajax({
  method: 'GET',
  url: 'https://api.unsplash.com/photos',
  data: {
    order_by: 'popular',
    per_page: 20,
    page,
  },
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
  },
});

// export const fetchUnsplashPopular = (page) => {
//   const promise = new Promise((resolve, reject) => {
//     resolve(cache);
//   });
//   return promise;
// };
