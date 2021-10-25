/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  } else {
    let res = []
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
    let digitsArr = digits.split("");
    let len = digitsArr.length;
    let count;
    for (let i = 1; i < len - 1; i++) {
      count = numToString[digitsArr[i]] * numToString[digitsArr[i + 1]];
    }
    
  }
};
