/*****************************************************************************************************************
 * iRequest React Native App
 * Author : Alokkumar Dubey
 * File : MainReducer.js
 * Date : 26/07/2018
 * Updated date : 14/08/2018
 * Comment : Declaration of combineReducers.
 ****************************************************************************************************************/

import { combineReducers } from "redux";
import HomeReducer from "./../Components/Home/HomeReducer";
import SideBarReducer from "./../ThemeComponent/SideBar/SideBarReducer";

export default combineReducers({
  homeReducer: HomeReducer,

  sideBarReducer : SideBarReducer
});
