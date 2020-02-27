const chainMaker = {
  strChain: [],

  getLength() {
    return this.strChain.length;
  },

  addLink(value) {
    this.strChain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position == "number" && position > 0 && position <= this.strChain.length - 1) {
      this.strChain.splice(position - 1, 1);
      return this;
    } else {
      this.strChain = [];
      throw new Error();
    }
  },

  reverseChain() {
    this.strChain.reverse();
    return this;
  },

  finishChain() {
    let res = this.strChain.join("~~");
    this.strChain = [];
    return res;
  }
};

module.exports = chainMaker;
