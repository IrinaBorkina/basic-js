const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const activity = parseFloat(sampleActivity);

  if (typeof sampleActivity !== "string") {
    return false;
  } else if (activity < MODERN_ACTIVITY && activity > 0) {
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
  }
  return false;
};
