import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 15 * 60 * 1000 // 15 minutes
});

const httpClient = axios.create({
  adapter: cache.adapter,
  baseURL: 'http://212.1.214.25:8081',
  headers: {
    common: {
      "Content-Type": "application/json"
    }
  }
});

export const httpGet = httpClient.get;
export const httpPut = httpClient.put;
export const httpPost = httpClient.post;
export const httpDelete = httpClient.delete;

export default httpClient;
