// Функції для HTTP-запитів

import axios from 'axios';

const BASE_URL = "https://pixabay.com";
const ENDPOINT = "api/";
const API_KEY = "44801301-54ead35aff71c3b10e6d6b08d";

axios.defaults.baseURL = BASE_URL;

function getFhotos({ q = "", page = 1, per_page = 15, orientationPhoto ='horizontal',typeImage='photo', safesearch='true' } = {}) {
  return axios
    .get(ENDPOINT, {
      params: {
        key: API_KEY,
        q,
        page,
        per_page,
        language: "en",
        orientationPhoto,
        typeImage,
        safesearch
      },
    })
    .then(({ data }) => data);
}

export { getFhotos };



