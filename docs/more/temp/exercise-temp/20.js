const isValid = (s) => {
  if (s.length === 0) {
      return true
  } else if (s.length % 2 !== 0) {
      return false
  } else {
      let stack = []
      let map = { "{": "}", "[": "]", "(": ")" }
      for (let i = 0; i < s.length; i++) {
          if (map[s[i]]) {
              stack.push(map[s[i]])
          } else {
              if (stack[stack.length - 1] === s[i]) {
                  stack.pop()
              } else {
                  return false
              }
          }
      }
      return stack.length === 0
  }
}
console.log(isValid("}}"));