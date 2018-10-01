module.exports.getRequest = (endpoint, params, query) => {
  const axios = require("axios");
  return axios.get(`/app/${endpoint}`);
};
module.exports.postRequest = (endpoint, body) => {
  const axios = require("axios");
  return axios.post(`/app/${endpoint}`, body);
};
module.exports.patchRequest = (endpoint, body) => {
  const axios = require("axios");
  return axios.patch(`/app/${endpoint}`, body);
};
module.exports.deleteRequest = (endpoint, body) => {
  const axios = require("axios");
  return axios.delete(`/app/${endpoint}`, body);
};
