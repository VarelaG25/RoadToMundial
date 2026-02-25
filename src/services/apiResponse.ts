import apiAxiosInstance from './apiAxiosInstance'

apiAxiosInstance.interceptors.response.use((response) => {
  // You can modify the response here if needed
  return response
})

export default apiAxiosInstance
