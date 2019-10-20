function high_order(func, num) {
  if (num) {
    func();
    return high_order(func, --num);
  }
};
module.exports = high_order;
