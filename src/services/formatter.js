import translation from "./translation";

function getTranslation(word) {
  return translation[word];
}
function formatMainDataArray(value) {
  return value.toLocaleString('en-US');
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

export {
  getTranslation,
  formatMainDataArray,
  formatPerformanceArray,
  formatDaysList
}