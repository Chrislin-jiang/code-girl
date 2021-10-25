/**
* @param {number} n
* @return {number[]}
* 输入: 0
* 输出: [0]
* 输入: 1
* 输出: [0,1]
* 输入: 2
* 输出: [0,1,3,2]
*       [0,1,1+2^1,0+2^1]
* 输入：3
* 输出：000,001,011,010,110,111,101,100
* 输出：[0,1,3,2,6,7,5,4]
* 输出：[0,1,3,2,2+2^2,3+2^2,1+2^2,0+2^2]
* 输入：4
* 输出：0000,0001,0011,0010,0110,0111,0101,0100,1100,1101,1111,1110,1010,1011,1001,1000
* 输出：[0,1,3,2,6,7,5,4,12,13,15,14,10,11,9,8]
* 输出：[0,1,3,2,6,7,5,4,4+2^3,5+8,7+8,6+8,2+8,3+8,1+8,0+8]
*/
var grayCode = function (n) {
  let res = [0],
    right;
  let i = 1;
  while (i <= n) {
    right = res
      .slice(0)
      .reverse()
      .map((item) => item + Math.pow(2, i - 1));
    res = res.concat(right);
    i++;
  }
  return res;
};
var grayCode = function (n) {
  let res = [0],
    right;
  let i = 1;
  while (i <= n) {
    // right = res
    //   .slice(0)
    //   .reverse()
    //   .map((item) => item + Math.pow(2, i - 1));
    right = [...res].reverse().map((item) => item + Math.pow(2, i - 1));
    // res = res.concat(right);
    res = [res, ...right]
    i++;
  }
  return res;
};
const grayCode = function (n) {
  let res = [0], right
  for (let i = 1; i <= n; i++) {
    right = [...res].reverse().map((ele) => ele + Math.pow(2, i - 1))
    res = [...res, ...right]
  }
  return res
};