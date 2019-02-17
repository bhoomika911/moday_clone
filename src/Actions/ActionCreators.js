import API_CONST from "../Constants/APIConstants";

export const getNews = (data) => ({
  type: API_CONST.N_GET_NEWS,
  data
});
