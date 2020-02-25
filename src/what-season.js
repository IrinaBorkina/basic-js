module.exports = function getSeason(date) {
  let season = "";

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (toString.call(date) !== "[object Date]") {
    throw new Error();
  }

  let month = date.getMonth();

  if (month === 11 || month === 0 || month === 1) season = "winter";
  else if (month === 2 || month === 3 || month === 4) season = "spring";
  else if (month === 5 || month === 6 || month === 7) season = "summer";
  else if (month === 8 || month === 9 || month === 10) season = "autumn";

  return season;
};
