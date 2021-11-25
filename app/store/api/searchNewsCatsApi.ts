const axios = require('axios');

export const searchNewsCatsApi = (params: { filters?: { News_Keywords: string | number }, limit: string, page: string }) => {

  const config = {
    method: 'post',
    url: 'https://tvphapluat.vn/api/posts/',
    headers: {},
    data: params
  };
  return axios(config)
    .then(function (response: any) {

      return response
    })
    .catch(function (error: any) {
      return error
    });
}
