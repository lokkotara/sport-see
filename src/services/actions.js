import { fetcherGet } from "./fetcher";
import { store } from "../providers/Store";
import {uSER_AVERAGE_SESSIONS} from "../datas/data";

let USER_AVERAGE_SESSIONS   = [];
let USER_ACTIVITY           = [];
let USER_PERFORMANCE        = [];
let USER_MAIN_DATA          = [];

// const id = parseInt(window.location.pathname.split("/")[2]);
function isMockedFunction() {
  const mocked = window.location.href.split("?")[1] === "mocked";
  return mocked;
}

async function getUserInfos(id) {
  if (USER_MAIN_DATA.length === 0) USER_MAIN_DATA = await fetcherGet(`http://localhost:3000/user/${id}`);
  store.set({
    USER_MAIN_DATA: {
      userInfos: {
        firstName   : USER_MAIN_DATA["data"]["userInfos"].firstName,
        lastName    : USER_MAIN_DATA["data"]["userInfos"].lastName,
        age         : USER_MAIN_DATA["data"]["userInfos"].age,
      },
      todayScore: [
        {
          name    : USER_MAIN_DATA["data"]["userInfos"].firstName,
          score   : USER_MAIN_DATA["data"].score * 100,
          fill    : "red",
        },
      ],
      keyData: USER_MAIN_DATA["data"].keyData,
    }
  });
}

async function getUserPerformance(id) {
  if (USER_PERFORMANCE.length === 0) USER_PERFORMANCE = await fetcherGet(`http://localhost:3000/user/${id}/performance`);
  store.set({
    USER_PERFORMANCE : {
      userId    : USER_PERFORMANCE['data'].userId,
      kind      : USER_PERFORMANCE['data'].kind,
      data      : USER_PERFORMANCE['data'].data
    }
  });
}

async function getUserActivity(id) {
  if (USER_ACTIVITY.length === 0) USER_ACTIVITY = await fetcherGet(`http://localhost:3000/user/${id}/activity`);
  store.set({
    USER_ACTIVITY: {
      sessions: USER_ACTIVITY['data'].sessions
    }
  });
}

async function getUserSessions(id) {
  if (USER_AVERAGE_SESSIONS.length === 0) USER_AVERAGE_SESSIONS = await fetcherGet(`http://localhost:3000/user/${id}/average-sessions`);
  store.set({
    USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS["data"].sessions,
  });
}

function getMockedSessions(id) {
  const res = uSER_AVERAGE_SESSIONS.find(sess =>sess.userId === id);
  if(res) return res.sessions;
}

export {
  getUserInfos,
  getUserPerformance,
  getUserActivity,
  getUserSessions,
  getMockedSessions,
  isMockedFunction
};
