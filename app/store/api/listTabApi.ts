const axios = require('axios');
const data = '';



export function getListTabApi() {
  const config = {
    method: 'get',
    url: 'https://tvphapluat.vn/api/cats/',
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




// export function addCourseRequest(item) {
//   const config = {
//     method: 'post',
//     url: 'http://118.69.123.51:5000/fis/api/edu/create_new_course',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTNhYjFkZTY1OTVhM2JkM2JiOTFlZiIsImlhdCI6MTYwNDk3NTYwNn0.oef7gRKaJkfuV5fL_TvavzJE90ywshiu_rt7PoIbt5w',
//     },
//     data: JSON.stringify({
//       courseName: item.courseName,
//       trainer: item.trainer,
//       startedDate: item.startedDate,
//       endedDate: item.endedDate,
//       buildingId: item.buildingId,
//       roomId: item.roomId,
//     }),
//   };

//   return axios(config)
//     .then(function (response) {
//       return response;
//     })
//     .catch(function (error) {
//       return error;
//     });
// }