import axios from "axios"
const { VITE_BASE_URL } = import.meta.env

const Api = axios.create({
  baseURL: `${VITE_BASE_URL}`,
  responseType: "json",
  withCredentials: true,
})

export default Api
