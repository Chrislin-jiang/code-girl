const baseConverter = (decNumber, base) => {
  if (Number.isInteger(base) && base >= 2 && base <= 36) {
    let temp = [], res = ''
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (decNumber > 0) {
      temp.push(digits[decNumber % base])
      decNumber = Math.floor(decNumber / base)
    }
    while (temp.length !== 0) {
      res = res + temp.pop().toString()
    }
    return res
  } else {
    return ''
  }
}
console.log(baseConverter(31, 1));