import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "ouR3XFCFsn88Cpokf2MqEx1qUZVXZXxGuF7urYJS_70";

export const fetchArticlesWithTopic = async (query, page = 1) => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: { query, page },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images: ", error);
    throw error;
  }
};