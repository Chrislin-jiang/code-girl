/**
 * @param {number[]} deck
 * @return {boolean}
 * [1,2,3,4,4,3,2,1]
 * [1,1,1,2,2,2,3,3]
 * [1,1,1,2,2,2,3,3]
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length === 1) {
    return false;
  } else {
    deck.sort((a, b) => a - b);
    let count = 0;
    let temp = 1;
    for (let i = 1; i < deck.length; i++) {
      if (deck[i] === deck[i - 1]) {
        temp = temp + 1;
      } else {
        if (count === 0) {
          count = temp;
        }
        if (temp >= count && temp % count === 0) {
          temp = 1;
        } else if (temp < count && count % temp === 0) {
          count = temp;
          temp = 1;
        } else {
          continue;
        }
      }
    }
    if (count === 0) {
      return true;
    } else {
      if (temp >= count && temp % count === 0) {
        return true;
      } else if (temp < count && count % temp === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};

// 这个方法不行
// [1,1,1,1,2,2,2,2,2,2]   temp=6，count=4，但是 n 可以取 2
