import configs from "./config";
const API_KEY = configs.api_key;

console.log("API_KEY: " + API_KEY)

export default {
    fetchTop: `/movie/top_rated?api_key=${API_KEY}`,
    fetchPop: `/movie/popular?api_key=${API_KEY}`,
    fetchUp: `/movie/upcoming?api_key=${API_KEY}`,
    fetchNow: `/movie/now_playing?api_key=${API_KEY}`,
};