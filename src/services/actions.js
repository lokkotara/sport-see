// @ts-nocheck
import { fetcherGet } from "./fetcher";
import { store } from "../providers/Store";
import {
  formatMainDataArray,
  formatPerformanceArray,
  formatDaysList,
} from "./formatter";
import {
  user_activity,
  user_average_sessions,
  user_performance,
  user_main_data,
} from "../datas/data";

let USER_AVERAGE_SESSIONS = [];
let USER_ACTIVITY = [];
let USER_PERFORMANCE = [];
let USER_MAIN_DATA = [];

async function getAllData(id) {
  const newData = {};
  store.set({ isLoading: true });
  try {
    newData.USER_MAIN_DATA = await getUserInfos(id);
    newData.USER_MAIN_DATA.keyData.calorieCount = formatMainDataArray(
      newData.USER_MAIN_DATA.keyData.calorieCount
    );
    newData.USER_PERFORMANCE = await getUserPerformance(id);
    newData.USER_ACTIVITY = await getUserActivity(id);
    newData.USER_AVERAGE_SESSIONS = await getUserSessions(id);
    newData.USER_PERFORMANCE.data = formatPerformanceArray(
      newData.USER_PERFORMANCE
    );
    newData.USER_AVERAGE_SESSIONS = formatDaysList(
      newData.USER_AVERAGE_SESSIONS
    );
  } catch (err) {
    newData.error = true;
    console.error(err);
  } finally {
    newData.isLoading = false;
    store.set(newData);
  }
}

async function getUserInfos(id) {
  if (isMocked()) {
    if (USER_MAIN_DATA.length === 0) {
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
          score: USER_MAIN_DATA.todayScore * 100,
          fill: "red",
        },
      ],
      keyData: USER_MAIN_DATA.keyData,
      todayScore: USER_MAIN_DATA.todayScore * 100,
    };
  } else {
    if (USER_MAIN_DATA.length === 0)
      USER_MAIN_DATA = await fetcherGet(`http://localhost:3000/user/${id}`);
    return {
      userInfos: {
        firstName: USER_MAIN_DATA["data"]["userInfos"].firstName,
        lastName: USER_MAIN_DATA["data"]["userInfos"].lastName,
        age: USER_MAIN_DATA["data"]["userInfos"].age,
      },
      todayScoreDatas: [
        {
          name: USER_MAIN_DATA["data"]["userInfos"].firstName,
          score: USER_MAIN_DATA["data"].todayScore * 100,
          fill: "red",
        },
      ],
      keyData: USER_MAIN_DATA["data"].keyData,
      todayScore: USER_MAIN_DATA["data"].todayScore * 100,
    };
  }
}

async function getUserPerformance(id) {
  if (isMocked()) {
    if (USER_PERFORMANCE.length === 0) {
      const performance = getMockedPerformance(parseInt(id));
      if (performance) USER_PERFORMANCE = performance;
    }
    return {
      userId: USER_PERFORMANCE["userId"],
      kind: USER_PERFORMANCE["kind"],
      data: USER_PERFORMANCE["data"].reverse(),
    };
  } else {
    if (USER_PERFORMANCE.length === 0)
      USER_PERFORMANCE = await fetcherGet(
        `http://localhost:3000/user/${id}/performance`
      );
    return {
      userId: USER_PERFORMANCE["data"].userId,
      kind: USER_PERFORMANCE["data"].kind,
      data: USER_PERFORMANCE["data"].data.reverse(),
    };
  }
}

async function getUserActivity(id) {
  if (isMocked()) {
    if (USER_ACTIVITY.length === 0) {
      const activity = getMockedActivity(parseInt(id));
      if (activity) USER_ACTIVITY = activity;
    }
    return { sessions: USER_ACTIVITY };
  } else {
    if (USER_ACTIVITY.length === 0)
      USER_ACTIVITY = await fetcherGet(
        `http://localhost:3000/user/${id}/activity`
      );
    return { sessions: USER_ACTIVITY["data"].sessions };
  }
}

async function getUserSessions(id) {
  if (isMocked()) {
    if (USER_AVERAGE_SESSIONS.length === 0) {
      const sessions = getMockedSessions(parseInt(id));
      if (sessions) USER_AVERAGE_SESSIONS = sessions;
    }
    return USER_AVERAGE_SESSIONS;
  } else {
    if (USER_AVERAGE_SESSIONS.length === 0)
      USER_AVERAGE_SESSIONS = await fetcherGet(
        `http://localhost:3000/user/${id}/average-sessions`
      );
    return USER_AVERAGE_SESSIONS["data"].sessions;
  }
}

/**
 * permet de renvoyer un booléen pour savoir si l'url contient "mocked"
 *
 * @return  {boolean}  retourne true si l'url contient "mocked", sinon false
 */
const isMocked = () => {
  const mocked = window.location.href.split("?")[1] === "mocked";
  return mocked;
};

function getMockedSessions(id) {
  const res = user_average_sessions.find((elt) => elt.userId === id);
  if (res) return res.sessions;
}
function getMockedActivity(id) {
  const res = user_activity.find((elt) => elt.userId === id);
  if (res) return res.sessions;
}
function getMockedPerformance(id) {
  const res = user_performance.find((elt) => elt.userId === id);
  if (res) return res;
}
function getMockedMainData(id) {
  const res = user_main_data.find((elt) => elt.id === id);
  if (res) return res;
}

export { getAllData, isMocked };