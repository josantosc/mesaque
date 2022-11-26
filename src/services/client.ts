import axios from "axios";

export const clientHttp = axios.create({
  baseURL: "http://69.55.54.140",
  timeout: 10000,
});
