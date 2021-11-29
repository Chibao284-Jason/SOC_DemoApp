const axios = require('axios');



export const getDetailNewsApi = (params: { id: string | number }) => {
  const config = {
    method: 'post',
    url: 'https://tvphapluat.vn/api/post/',
    headers: {},
    params: params
  };
  return axios(config)
    .then(function (response: any) {

      return response
    })
    .catch(function (error: any) {
      return error
    });
}
