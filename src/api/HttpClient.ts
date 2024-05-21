import axios, { Axios } from "axios";

export class HttpClient {
  protected http: Axios;
  constructor() {
    axios.defaults.baseURL = "http://68.183.74.14:4005/api/";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.withCredentials = false;
    axios.defaults.maxRedirects = 0;
    this.http = axios;
  }
}
