const data = {
  isMocked: false,
  userId: 18,
  USER_MAIN_DATA: {
    userInfos: {
      firstName: "Joe",
      lastName: "",
      age: 0,
    },
    todayScore: 0, //un nombre entre 0 et 1
    keyData: {
      calorieCount: 0,
      proteinCount: 0,
      carbohydrateCount: 0,
      lipidCount: 0,
    },
    todayScoreDatas: [{
      name: 'Cecilia',
      score: 0.12,
      fill: 'red',
  }],
  },
  USER_ACTIVITY: {
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 0,
        calories: 0,
      },
    ],
  },
  USER_AVERAGE_SESSIONS: [
    {
      day: 1,
      sessionLength: 0,
    },
  ],
  USER_PERFORMANCE: {
    userId: 0,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 0,
        kind: 1,
      },
    ],
  },
};

export default data;
