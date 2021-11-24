const axios = require('axios');

export const getListNewsCatsApi = (data: { filters: { News_Cat: string }, limit: string, page: string }) => {
  const config = {
    method: 'post',
    url: 'https://tvphapluat.vn/api/posts/',
    headers: {},
    data: data
  };
  return axios(config)
    .then(function (response: any) {
      return response
    })
    .catch(function (error: any) {
      return error
    });
}
