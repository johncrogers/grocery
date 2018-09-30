module.exports.getRequest = (endpoint, params, query) => {
  const axios = require("axios");
  return axios.get(`/api/${endpoint}`);
};
module.exports.postRequest = (endpoint, body) => {
  const axios = require("axios");
  return axios.post(`/api/${endpoint}`, body);
};
module.exports.patchRequest = (endpoint, body) => {
  const axios = require("axios");
  return axios.patch(`/api/${endpoint}`, body);
};
module.exports.deleteRequest = (endpoint, body) => {
  const axios = require("axios");
  return axios.delete(`/api/${endpoint}`, body);
};
