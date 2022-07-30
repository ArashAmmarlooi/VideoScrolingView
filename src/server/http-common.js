import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.aparat.com",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "*",
    // "Access-Control-Allow-Methods": "*",
  },
});
export default instance;
