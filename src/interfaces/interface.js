/**
 * @typedef {Object} specsToFetch
 * @property {String} url  - url to fetch
 * @property {("GET" | "POST" | "DELETE" | "PATCH" | "PUT")} method    - method to use
 *
 * 
 * @typedef {Object} userInfosObject
 * @property {UserInfos} userInfos
 * @property {KeyData} keyData
 * @property {Array.<ScoreDatas>} [todayScoreDatas]
 * @property {number} todayScore
 * 
 * @typedef {Object} userInfosProps
 * @property {Array.<ScoreDatas>} todayScoreDatas
 * @property {number} todayScore
 *
 * @typedef {Object} UserInfos
 * @property {String} firstName
 * @property {String} lastName
 * @property {Number} age
 *
 * @typedef {Object} ScoreDatas
 * @property {string} name
 * @property {Number} score
 * @property {string} fill
 *
 * @typedef {Object} KeyData
 * @property {Number} calorieCount
 * @property {Number} proteinCount
 * @property {Number} lipidCount
 * @property {Number} carbohydrateCount
 * 
 * @typedef {Object} userPerformanceObject
 * @property {Number} userId
 * @property {{1:String, 2:String, 3:String, 4:String, 5:String, 6:String}} kind
 * @property {Array.<dataObject>} data
 * 
 * @typedef {Object} userPerformanceData
 * @property {Array.<dataObject>} data
 *
 * @typedef {Object} dataObject
 * @property {Number} value
 * @property {Number} kind
 * 
 * @typedef {Object} userActivityObject
 * @property {Array.<activitySessionObject>} sessions
 * 
 * @typedef {Object} activitySessionObject
 * @property {String} day
 * @property {Number} kilogram
 * @property {Number} calories
 * 
 * @typedef {Object} userSessionsObject
 * @property {Array.<sessionObject>} sessions
 * 
 * @typedef {Object} sessionObject
 * @property {Number} day
 * @property {Number} sessionLength
 * 
 * @typedef {Object} NewData
 * @property {Boolean} isMocked
 * @property {Number} userId
 * @property {userInfosObject} USER_MAIN_DATA
 * @property {userActivityObject} USER_ACTIVITY
 * @property {userSessionsObject} USER_AVERAGE_SESSIONS
 * @property {userPerformanceObject} USER_PERFORMANCE
 * 
 * @typedef {Object} customToolTipProps
 * @property {Boolean} active
 * @property {Array.<payloadObject>} [payload]
 * 
 * @typedef {Object} payloadObject
 * @property {String} name
 * @property {Number} value
 * @property {String} color
 * @property {String} dataKey
 * @property {String} fill
 * @property {activitySessionObject} payload
 * @property {Array.<Number>} radius
 * @property {String} [chartType]
 * @property {String} [formatter]
 * @property {String} [type]
 * @property {String} [unit]
 * 
 * @typedef {Object} customCursorProps
 * @property {number} [x]
 * @property {number} [y]
 * @property {number} [width]
 * @property {number} [height]
 * 
 * @typedef {Object} navProps
 * @property {string} side  
 * 
 * @typedef {Object} customTickProps
 * @property {performancePayloadObject} [payload]
 * @property {String} [textAnchor]
 * @property {String} [stroke]
 * @property {Number} [x]
 * @property {Number} [y]
 * 
 * @typedef {Object} performancePayloadObject
 * @property {String} value
 * @property {Number} coordinate
 * @property {Number} index
 * @property {Number} offset
 * 
 * @typedef {Object} ToolTipContentProps
 * @property {Array.<sessionPayloadObject>} [payload] 
 * @property {boolean} [active]
 * 
 * @typedef {Object} sessionPayloadObject
 * @property {string} color 
 * @property {string} dataKey 
 * @property {string} fill 
 * @property {string} name
 * @property {sessionObject} payload
 * @property {Array} points
 * @property {string} stroke 
 * @property {Number} strokeWidth
 * @property {string} unit
 * @property {Number} value
 * @property {string} [chartType]
 * @property {string} [formatter]
 * @property {string} [type]
 * 
 * @typedef {Object} CustomCursorProps
 * @property {number} [width] 
 * @property {number} [height]
 * @property {array} [points]
 * 
 * @typedef {Object} CustomDotProps
 * @property {number} [cx] 
 * @property {number} [cy]
 * @property {string} [stroke]
 */

export {}