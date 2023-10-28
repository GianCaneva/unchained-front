import axios from "axios";
import { get } from "lodash";

// URL address for LOCAL solution
const API_URI = "http://localhost:8080";
// URL address for CLOUD solution
//const API_URI = "https://service-app-dot-unchainednews.rj.r.appspot.com";

// axios.interceptors.request.use((request) => {
//   console.log('Starting Request', JSON.stringify(request, null, 2))
//   return request
// })


const apiPath = (url) => `${API_URI}${url}`;

function processResponse(response) {
  const status = get(response, "status", null);
  const token = response.headers.get('Authorization')
  const formattedToken = token.split(' ')[1].trim()
  if (!status || status > 299) {
    throw response;
  }
  return formattedToken;
}

async function fetchLoginApi(url, config) {
  const { headers, method = "GET", version, ...rest } = config;
  const options = {
    method,
    headers,
    ...rest,
  };

  try {
    return processResponse(await axios(apiPath(url), options));
  } catch (e) {
    const status = get(e, "response.status");
    const data = get(e, "response.data");
    throw { ...data, httpCode: status } || e;
  }
}

export default fetchLoginApi;
