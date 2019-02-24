import { put, takeLatest, all ,call } from 'redux-saga/effects';
import API_CONST from "../Constants/APIConstants";
import ACTION_TYPES from "../Actions/ActionsType";

//Call for fetching data from api
const _apiCall = (url, data) => {
  return fetch(url, data)
    .then(res => {
      return { res: res, res_json: res.json() };
    })
    .catch(e => {
      throw e;
    });
};

//get response json
const _extJSON = p => {
  return p.then(res => res);
};

function* fetchNews() {
  let serviceURL = 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'
  let method = "get";

  try {
    let response = yield call(_apiCall, serviceURL, {
      method: method,
      // headers: headers,
      // body : body
    });

    var responseJSON = yield call(_extJSON, response.res_json);
    var responseData = {
      data: responseJSON,
      headerResponse: response.res
    };


    console.log("**************************************************");
    console.log("Received headerResponse loginUser API: ");
    console.log(JSON.stringify(responseData.headerResponse));
    console.log("Received data loginUser API: ");
    console.log(JSON.stringify(responseData.data));
    console.log("**************************************************");
    yield put({
      type: ACTION_TYPES.GET_NEWS,
      payload: responseData
    });
  } catch (e) {
    console.log("Error: " + e);
    var responseData = {
      isError: true,
      data: "" + e
    };
    yield put({
      type: ACTION_TYPES.GET_NEWS,
      payload: responseData
    });
  }
}

function* getProjectName(action) {
  let serviceURL = action.serviceURL;
  let method = action.method;

  try {
    let response = yield call(_apiCall, serviceURL, {
      method: method,
    });

    var responseJSON = yield call(_extJSON, response.res_json);
    var responseData = {
      data: responseJSON,
      headerResponse: response.res
    };

    yield put({
      type: ACTION_TYPES.GET_PROJECT_NAME_RES,
      payload: responseData
    });
  } catch (e) {
    console.log("Error: " + e);
    var responseData = {
      isError: true,
      data: "" + e
    };
    yield put({
      type: ACTION_TYPES.GET_PROJECT_NAME_RES,
      payload: responseData
    });
  }
}


// function* actionWatcher() {
//   yield takeLatest(API_CONST.N_GET_NEWS, fetchNews)
// }


export default function* rootSaga() {
  // yield all([actionWatcher(),]);
  yield takeLatest(API_CONST.N_GET_PROJECT_NAME, getProjectName);

}
