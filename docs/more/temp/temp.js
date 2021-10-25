/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) return [];
  let numToString = [
    "",
    1,
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  if (digits.length < 2) return numToString[digits].split("");
  let arr = digits.split("");
  let code = [];
  arr.forEach((item) => {
    if (numToString[item]) {
      code.push(numToString[item]);
    }
  });

  let combine = (arr) => {
    let tmp = [];
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, tmp);
    if (arr.length > 1) {
      combine(arr);
    } else {
      return tmp;
    }
    return arr[0];
  };
  return combine(code);
};
