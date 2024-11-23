import axios from "axios";

const api = axios.create({
  timeout: 10000,
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Company-Id": process.env.COMPANY_ID,
  },
});

export default api;
