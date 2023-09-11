axios.defaults.baseURL = 'https://api.imooc-web.lgdsunday.club/api';
axios.defaults.timeout = 5000;

axios.interceptors.request.use(
  (config) => {
    config.headers.icode = 'input you icode';

    // 必须返回配置
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use((response) => {
  const { success, message, data } = response.data;

  // 要根据success的成功与否决定下面的操作
  if (success) {
    return data;
  } else {
    return Promise.reject(new Error(message));
  }
});
