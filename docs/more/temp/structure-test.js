/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function(deck) {
  if (deck.length === 1) {
    return false;
  } else {
    // 最大公约数
    const gcdFn = (a, b) => {
      // 利用辗转相除法来计算最大公约数
      let c = a % b;
      if (c === 0) return b;
      return gcdFn(b, c);
    };
    deck.sort((a, b) => a - b);
    let count = 1;
    let gcd;
    for (let i = 1; i < deck.length; i++) {
      if (deck[i] === deck[i - 1]) {
        count++;
      } else {
        if (count === 1) {
          return false;
        } else {
          if (gcd === undefined) {
            gcd = count;
          } else {
            gcd = gcdFn(gcd, count);
          }
          count = 1;
        }
      }
    }
    // 最后
    if (gcd === undefined) {
      gcd = count;
    } else {
      gcd = gcdFn(gcd, count);
    }
    if (gcd >= 2) {
      return true;
    } else {
      return false;
    }
  }
};
