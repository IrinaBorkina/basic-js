module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let results = members
    .filter(item => {
      if (typeof item === "string") {
        return item;
      }
    })
    .map(item => {
      return item.trim()[0].toUpperCase();
    })
    .sort()
    .join("");

  return results;
};
