function isomorphic(s, t) {
  if (s.length !== t.length) { // 如果两个字符串长度不相等，则两个字符串不是同构的
    return false
  }
  
  for(let i = 0; i < s.length; i ++){
    // 判断两个字符串中相同位置对应的字符在两个字符串中首次出现的位置是否相同
    // 如果相同，则是两个字符串中的字符是一一对应关系
    // 如果不同，则两个字符串不是同构
    if(s.indexOf(s[i]) !== t.indexOf(t[i])){
        return false
    }
  }
  return true
}

let s = 'ab', t = 'aa'
console.log(isomorphic(s, t))
