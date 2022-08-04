import { fetcherGet } from "./fetcher";
import { store } from "../providers/Store";
import { formatPerformanceArray, formatDaysList } from "./formatter";

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
 * Set a variable "isLoading" to true. Then get all datas needed and set "isLoading" to false.Finally, save the datas in the store.
 * @param  {string}id - user id
 */
export default async function getAllData(id) {
  const newData = {};
  store.set({ isLoading: true });
  try {
    newData.USER_MAIN_DATA = await getUserInfos(id);
    newData.USER_PERFORMANCE = await getUserPerformance(id);
    newData.USER_ACTIVITY = await getUserActivity(id);
    newData.USER_AVERAGE_SESSIONS = await getUserSessions(id);
  } catch (err) {
    newData.error = true;
    console.error(err);
  } finally {
    newData.USER_PERFORMANCE.data = formatPerformanceArray(newData.USER_PERFORMANCE);
    newData.USER_AVERAGE_SESSIONS = formatDaysList(newData.USER_AVERAGE_SESSIONS);
    newData.isLoading = false;
    store.set(newData);
  }
}

/**
 * If the user's infos are not already stored in the USER_MAIN_DATA variable, then get
 * them from the API.
 * @param {string} id - the user id
 * @returns {Promise.<userInfosObject>}
 */
async function getUserInfos(id) {
  if (Object.entries(USER_MAIN_DATA).length === 0) {
    const res = await fetcherGet(`http://localhost:3000/user/${id}`);
    USER_MAIN_DATA = res.data;
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
 * them from the API.
 * @param {string} id - the user id
 * @returns {Promise.<userPerformanceObject>}
 */
async function getUserPerformance(id) {
  if (Object.entries(USER_PERFORMANCE).length === 0)
    USER_PERFORMANCE = await fetcherGet(
      `http://localhost:3000/user/${id}/performance`
    );
  return {
    userId: USER_PERFORMANCE["data"].userId,
    kind: USER_PERFORMANCE["data"].kind,
    data: USER_PERFORMANCE["data"].data.reverse(),
  };
}

/**
 * If the user's activity are not already stored in the USER_ACTIVITY variable, then get
 * them from the API.
 * @param   {String}  id  - the user id
 * @return  {Promise.<userActivityObject>}
 */
async function getUserActivity(id) {
  if (Object.entries(USER_ACTIVITY).length === 0)
    USER_ACTIVITY = await fetcherGet(
      `http://localhost:3000/user/${id}/activity`
    );
  return { sessions: USER_ACTIVITY.data.sessions };
}

/**
 * If the user's sessions are not already stored in the USER_AVERAGE_SESSIONS variable, then get
 * them from the API.
 * @param {String} id - the user id
 * @returns {Promise.<userSessionsObject>}
 */
async function getUserSessions(id) {
  if (Object.entries(USER_AVERAGE_SESSIONS).length === 0)
    USER_AVERAGE_SESSIONS = await fetcherGet(
      `http://localhost:3000/user/${id}/average-sessions`
    );
  return USER_AVERAGE_SESSIONS.data.sessions;
}