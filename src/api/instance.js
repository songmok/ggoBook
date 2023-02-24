import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.160:8520",
});

export default instance;
