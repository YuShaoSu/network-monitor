import axios from "./index";

export function ping(host) {
  return axios.get("/ping/" + host);
}
