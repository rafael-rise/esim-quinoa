import axios from "axios";
const service = axios.create()
service.defaults.maxRedirects = 0

export default service;