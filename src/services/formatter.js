import translation from "./translation";

/**
* @typedef {import ("../interfaces/interface").userPerformanceObject} userPerformanceObject
 */

/**
 * returns the translation of the given word
 *  @param {string | number} word 
 * */
const getTranslation = (word) => {
  return translation[word];
};

/**
 * Returns the formatted value in the english format
 *  @param {number} value - the value to format 
 * */
const formatMainDataArray = (value) => {
  return value.toLocaleString("en-US");
};

/**
 * It takes an array of objects, and adds a new property to each object in the array.
 * @param {userPerformanceObject} array - the array of objects that you want to format
 * @returns An array of objects with a new property called kind.
 */
const formatPerformanceArray = (array) => {
  const kind = array.kind;
  array.data.map((item) => (item.kind = getTranslation(kind[item.kind])));
  return array.data;
};


/**
 * It takes an array of objects, and for each object, it replaces the value of the key "day" with the
 * value of the key "day" in the object "days".
 * @param {Array<object>} array - the array of objects
 * @returns The array is being returned.
 */
const formatDaysList = (array) => {
  const days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };
  array.map((item) => (item.day = days[item.day]));
  return array;
};

export {
  getTranslation,
  formatMainDataArray,
  formatPerformanceArray,
  formatDaysList,
};
