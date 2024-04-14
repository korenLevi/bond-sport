import Axios from "axios";
const { VITE_BASE_URL } = import.meta.env


const Api = Axios.create({
  baseURL: `${VITE_BASE_URL}`,
  responseType: "json",
  withCredentials: true,
})


const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:5173/api/";
  // process.env.NODE_ENV === "production" ? "/api/" : "//127.0.0.1:5173/api/";

var axios = Axios.create({
  withCredentials: true,
});
export const httpService = {
  get(endpoint: string, data: null | any) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint: any, data: null | undefined) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint: any, data: null | undefined) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint: any, data: null | undefined) {
    return ajax(endpoint, "DELETE", data);
  },
};

async function ajax(endpoint: string, method = "GET", data = null) {
  console.log(`${BASE_URL}${endpoint}`);

  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    });
    console.log("res", res);

    return res.data;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`,
      data
    );
    console.dir(err);
    throw err;
  }
}
export default Api