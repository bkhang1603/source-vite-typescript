import axios from 'axios'
import configs from '../configs'
// import Cookies from "universal-cookie";

export const request = (endpoint: string, method: string, headers = {}, params = {}, body = {}) => {
  // const token = new Cookies().get("token") || "";

  return axios({
    url: configs.publicRuntime.API_URL + endpoint,
    method,
    headers: {
      ...headers
      // token,
    },
    params: {
      ...params
    },
    data: body
  })
}

export const get = (endpoint: string, params = {}, headers = {}) => {
  return request(endpoint, 'GET', headers, params)
}

export const post = (endpoint: string, body = {}, params = {}, headers = {}) => {
  return request(endpoint, 'POST', headers, params, body)
}

export const put = (endpoint: string, body = {}, params = {}, headers = {}) => {
  return request(endpoint, 'PUT', headers, params, body)
}

export const remove = (endpoint: string, body = {}, params = {}, headers = {}) => {
  return request(endpoint, 'DELETE', headers, params, body)
}
