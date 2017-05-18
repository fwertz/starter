import * as _axios from 'axios'

const axios = _axios.create( {
  baseURL: process.env.apis || 'http://localhost:3000'
} )

const CancelToken = _axios.CancelToken

export {
  axios as default,
  CancelToken
}
