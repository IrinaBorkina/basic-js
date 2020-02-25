module.exports = function countCats(matrix) {
  let cats = 0;

  [].concat(...matrix).filter(item => {
    item === "^^" ? (cats += 1) : (cats += 0);
  });

  return cats;
};
