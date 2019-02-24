import API_CONST from "../Constants/APIConstants";

export const getNews = (data) => ({
  type: API_CONST.N_GET_NEWS,
  data
});

export const getProjectName = (data) => ({
  type: API_CONST.N_GET_PROJECT_NAME,
  data
});
