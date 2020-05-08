function isomorphic(s, t) {
  if (s.length !== t.length) { // 如果两个字符串长度不相等，则两个字符串不是同构的
    return false
  }
  let obj = {} // 用对象来存储字符之间的映射关系
  for (let i = 0; i < s.length; i++) {
    // 判断字符串s中的字符是否存在于obj中
    if(typeof obj[s[i]] !== 'undefined'){
      // 如果字符串t中对应的字符与obj中的映射字符不同，则不是同构
      if(t[i] !== obj[s[i]]){
        return false
      }
    }else{
      // 如果不存在，将字符串s中的当前字符与t中对应位置的字符的映射关系保存到obj中
      obj[s[i]] = t[i]
    }
  }
  return true
}

let s = 'egg', t = 'add'
console.log(isomorphic(s, t))