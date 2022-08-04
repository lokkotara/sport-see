import { store } from "../providers/Store";
import { formatPerformanceArray, formatDaysList } from "./formatter";
import {
  user_activity,
  user_average_sessions,
  user_performance,
  user_main_data,
} from "../datas/data";

/**
* @typedef {import ("../interfaces/interface").userInfosObject} userInfosObject
* @typedef {import ("../interfaces/interface").userPerformanceObject} userPerformanceObject
* @typedef {import ("../interfaces/interface").userActivityObject} userActivityObject
* @typedef {import ("../interfaces/interface").activitySessionObject} activitySessionObject
* @typedef {import ("../interfaces/interface").userSessionsObject} userSessionsObject
* @typedef {import ("../interfaces/interface").sessionObject} sessionObject
 */

let USER_AVERAGE_SESSIONS = {};
let USER_ACTIVITY = {};
let USER_PERFORMANCE = {};
let USER_MAIN_DATA = {};

  /**
 * Return a boolean wether the URL contains "mocked" or not
 * @return  {boolean}  true if the URL contains "mocked"
 */
export const isMocked = () => {
    const mocked = window.location.href.split("?")[1] === "mocked";
    return mocked;
  };

/**
 * Set a variable "isLoading" to true. Then get all datas needed and set "isLoading" to false.Finally, save the datas in the store.
 * @param  {string}id - user id
 */
export default function getAllMockedData(id) {
  const newData = {};
  store.set({ isLoading: true });
  try {
    newData.USER_MAIN_DATA = getMockedUserInfos(id);
    newData.USER_PERFORMANCE = getMockedUserPerformance(id);
    newData.USER_ACTIVITY = getMockedUserActivity(id);
    newData.USER_AVERAGE_SESSIONS = getMockedUserSessions(id);
    newData.USER_PERFORMANCE.data = formatPerformanceArray(newData.USER_PERFORMANCE);
    newData.USER_AVERAGE_SESSIONS = formatDaysList(newData.USER_AVERAGE_SESSIONS);
  } catch (err) {
    newData.error = true;
    console.error(err);
  } finally {
    newData.isLoading = false;
    store.set(newData);
  }
}

/**
 * If the user's infos are not already stored in the USER_MAIN_DATA variable, then get
 * them from the mocked data.
 * @param {string} id - the user id
 * @returns {userInfosObject}
 */
function getMockedUserInfos(id) {
  if (Object.entries(USER_MAIN_DATA).length === 0) {
    const mainData = getMockedMainData(parseInt(id));
    if (mainData) USER_MAIN_DATA = mainData;
  }
  return {
    userInfos: {
      firstName: USER_MAIN_DATA["userInfos"].firstName,
      lastName: USER_MAIN_DATA["userInfos"].lastName,
      age: USER_MAIN_DATA["userInfos"].age,
    },
    todayScoreDatas: [
      {
        name: USER_MAIN_DATA["userInfos"].firstName,
        score: USER_MAIN_DATA["todayScore"] * 100,
        fill: "red",
      },
    ],
    keyData: USER_MAIN_DATA["keyData"],
    todayScore: USER_MAIN_DATA["todayScore"] * 100,
  };
}

/**
 * If the user's performances are not already stored in the USER_PERFORMANCE variable, then get
 * them from the mocked data.
 * @param {string} id - the user id
 * @returns {userPerformanceObject}
 */
function getMockedUserPerformance(id) {
  if (Object.entries(USER_PERFORMANCE).length === 0) {
    const performance = getMockedPerformance(parseInt(id));
    if (performance) USER_PERFORMANCE = performance;
  }
  return {
    userId: USER_PERFORMANCE["userId"],
    kind: USER_PERFORMANCE["kind"],
    data: USER_PERFORMANCE["data"].reverse(),
  };
}

/**
 * If the user's activity are not already stored in the USER_ACTIVITY variable, then get
 * them from the mocked data.
 * @param   {String}  id  - the user id
 * @return  {userActivityObject}
 */
function getMockedUserActivity(id) {
  if (Object.entries(USER_ACTIVITY).length === 0) {
    const activity = getMockedActivity(parseInt(id));
    if (activity) USER_ACTIVITY.sessions = activity;
  }
  return { sessions: USER_ACTIVITY.sessions };
}

/**
 * If the user's sessions are not already stored in the USER_AVERAGE_SESSIONS variable, then get
 * them from the mocked data.
 * @param {String} id - the user id
 * @returns {userSessionsObject}
 */
function getMockedUserSessions(id) {
  if (Object.entries(USER_AVERAGE_SESSIONS).length === 0) {
    const sessions = getMockedSessions(parseInt(id));
    if (sessions) USER_AVERAGE_SESSIONS.sessions = sessions;
  }
  return USER_AVERAGE_SESSIONS.sessions;
}

/**
 * Returns the mocked datas for the average sessions of a user
 * @param   {Number}  id  user id
 * @return  {(Array.<sessionObject>|void)}
 */
function getMockedSessions(id) {
  const res = user_average_sessions.find((elt) => elt.userId === id);
  if (res) return res.sessions;
  return console.error("Aucune donnée mockée ne correspond");
}

/**
 * Returns the mocked datas for the activity sessions of a user
 * @param   {Number}  id  user id
 * @return  {(Array.<activitySessionObject>|void)}
 */
function getMockedActivity(id) {
  const res = user_activity.find((elt) => elt.userId === id);
  if (res) return res.sessions;
  return console.error("Aucune donnée mockée ne correspond");
}

/**
 * Returns the mocked datas for the average sessions of a user
 * @param   {Number}  id  user id
 * @return  {(userPerformanceObject|void)}
 */
function getMockedPerformance(id) {
  const res = user_performance.find((elt) => elt.userId === id);
  if (res) return res;
  return console.error("Aucune donnée mockée ne correspond");
}

/**
 * Returns the mocked datas for the infos of a user
 * @param   {Number}  id  user id
 * @return  {(userInfosObject|void)}
 */
function getMockedMainData(id) {
  const res = user_main_data.find((elt) => elt.id === id);
  if (res) return res;
  return console.error("Aucune donnée mockée ne correspond");
}