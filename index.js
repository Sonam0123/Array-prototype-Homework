const initialArr = [1, 2, 3];

Array.prototype.ourForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

Array.prototype.ourMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

Array.prototype.ourFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.ourReduce = function (cb) {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    total = cb(total, this[i], i, this);
  }
  return total;
};

