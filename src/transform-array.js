module.exports = function transform(arr) {
  let res = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--double-next") {
        if (i < arr.length - 1) {
          res.push(arr[i + 1]);
        }
      } else if (arr[i] == "--double-prev") {
        if (i > 0) res.push(arr[i - 1]);
      } else if (arr[i] == "--discard-next") {
        if (i < arr.length - 1) {
          i++;
        }
      } else if (arr[i] == "--discard-prev") {
        if (i > 0) res.pop();
      } else {
        res.push(arr[i]);
      }
    }
    return res;
  } else {
    throw new Error();
  }
};
