import { fetcherGet }          from "./fetcher";
import { store }               from "../providers/Store";
import {uSER_AVERAGE_SESSIONS} from "../datas/data";
import translate from "./translate";

let USER_AVERAGE_SESSIONS = [];
let USER_ACTIVITY         = [];
let USER_PERFORMANCE      = [];
let USER_MAIN_DATA        = [];

// const id = parseInt(window.location.pathname.split("/")[2]);
function isMockedFunction() {
  const mocked = window.location.href.split("?")[1] === "mocked";
  return mocked;
}

async function getAllData(id) {
  const newData = {};
  store.set({isLoading: true});
  try{
    newData.USER_MAIN_DATA        = await getUserInfos(id);
    newData.USER_PERFORMANCE      = await getUserPerformance(id);
    newData.USER_ACTIVITY         = await getUserActivity(id);
    newData.USER_AVERAGE_SESSIONS = await getUserSessions(id);
    newData.USER_PERFORMANCE.data = formatPerformanceArray(newData.USER_PERFORMANCE);
    newData.USER_AVERAGE_SESSIONS = formatDaysList(newData.USER_AVERAGE_SESSIONS);
  }
  catch(err){
    newData.error = true;
    console.error(err);
  }
  finally{
  newData.isLoading = false;
  store.set(newData);
  }
}

async function getUserInfos(id) {
  if (USER_MAIN_DATA.length === 0) USER_MAIN_DATA = await fetcherGet(`http://localhost:3000/user/${id}`);
  return {
      userInfos: {
        firstName: USER_MAIN_DATA["data"]["userInfos"].firstName,
        lastName : USER_MAIN_DATA["data"]["userInfos"].lastName,
        age      : USER_MAIN_DATA["data"]["userInfos"].age,
      },
      todayScore: [
        {
          name : USER_MAIN_DATA["data"]["userInfos"].firstName,
          score: USER_MAIN_DATA["data"].score * 100,
          fill : "red",
        },
      ],
      keyData: USER_MAIN_DATA["data"].keyData,
    }
}

async function getUserPerformance(id) {
  if (USER_PERFORMANCE.length === 0) USER_PERFORMANCE = await fetcherGet(`http://localhost:3000/user/${id}/performance`);
  return {
      userId: USER_PERFORMANCE['data'].userId,
      kind  : USER_PERFORMANCE['data'].kind,
      data  : USER_PERFORMANCE['data'].data
    }
}

async function getUserActivity(id) {
  if (USER_ACTIVITY.length === 0) USER_ACTIVITY = await fetcherGet(`http://localhost:3000/user/${id}/activity`);
  return  {sessions : USER_ACTIVITY['data'].sessions}
}

async function getUserSessions(id) {
  if (USER_AVERAGE_SESSIONS.length === 0) USER_AVERAGE_SESSIONS = await fetcherGet(`http://localhost:3000/user/${id}/average-sessions`);
  return  USER_AVERAGE_SESSIONS["data"].sessions
}

function getTranslation(word) {
  return translate[word];
}
function formatPerformanceArray(array) {
  const kind = array.kind;
  array.data.map(item => item.kind = getTranslation(kind[item.kind]))
  return array.data;
}
function formatDaysList(array) {
  const days = {
    1:"L",
    2:"M",
    3:"M",
    4:"J",
    5:"V",
    6:"S",
    7:"D"
  }
  array.map(item => item.day = days[item.day]);
  return array;
}

function getMockedSessions(id) {
  const res = uSER_AVERAGE_SESSIONS.find(sess =>sess.userId === id);
  if(res) return res.sessions;
}

export {
  // getUserInfos,
  // getUserPerformance,
  // getUserActivity,
  // getUserSessions,
  // getMockedSessions,
  getAllData,
  isMockedFunction
};
