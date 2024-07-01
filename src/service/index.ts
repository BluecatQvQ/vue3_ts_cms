import { BASE_URL, TIME_OUT } from './config'
import ZLDRequest from './request'

const zldRequest = new ZLDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default zldRequest
