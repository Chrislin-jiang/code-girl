const MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_SAFE_INTEGER;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  if (val <= this.min) {
    this.stack.push(this.min);
    this.min = val;
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let temp = this.stack.pop();
  if (temp === this.min) {
    this.min = this.stack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
