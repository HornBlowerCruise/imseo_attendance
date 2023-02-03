import axios from "axios";

const api = axios.create({
    // baseURL:"https://kagomepizza-ragtime.shop",
    baseURL:"http://localhost:9090/api/v1",
    // baseURL:"https://mskimseo.shop",
    headers:{"Content-Type":"application/json"}
})

// Add a request interceptor
api.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log("request start", config)
    return config;
  }, function (error) {
    // Do something with request error
    // console.log("requesterror", error)
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("get response", response)
    console.log("get response", response.data)
    if(response.data==='추후 qr등록을 해야합니다.'){
      alert(response.data);
    }
    if(response.data==='해당 참석정보를 찾을 수 없습니다.'){
      alert(response.data);
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("response error", error)
    
    if(error.response.status===403){
      alert("로그인 세션이 만료되었습니다.")
      localStorage.removeItem('token');
      window.location.reload();
    }
    return Promise.reject(error);
  });

  export default api;
