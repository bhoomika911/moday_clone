/*****************************************************************************************************************
 * iRequest React Native App
 * Author : Alokkumar Dubey
 * File : APIUrls.js
 * Date : 26/07/2018
 * Updated date : 05/08/2018
 * Comment : API URLs string Constants.
 ****************************************************************************************************************/

const BASE_URL = "https://auth.zycus.com"; // Production URL

const API = {
  BASE_URL: BASE_URL,
  LOGIN: BASE_URL + "/ZygrateSecurity/rest/v1/auth/user",
  GET_NEWS : 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'
};

export default API;
