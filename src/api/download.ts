import axios from "axios";

const downloadFiles = axios.create({
  baseURL: "http://192.168.0.160:8520",
  // headers: { "Content-type": "application/json; charset=UTF-8" },
  responseType: "blob",
  timeout: 5000,
});

export default downloadFiles;
