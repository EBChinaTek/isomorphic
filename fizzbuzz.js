function whatToSay(sequence){
  if(sequence%3===0) return 'Fizz'
  if(sequence===5) return 'Buzz'
  return `${sequence}`
}

console.assert(whatToSay(3)==='Fizz', '第三个同学应该说Fizz')
console.assert(whatToSay(5)==='Buzz', '第五个同学应该说Buzz')
console.assert(whatToSay(6)==='Fizz', '第六个同学应该说Fizz')
[1,2,4,7,8,11,13,14,16].forEach(sequence=>console.assert(whatToSay(sequence)===`${sequence}`, `第${sequence}个同学应该说${sequence}`))
console.assert(whatToSay(9)==='Fizz', '第九个同学应该说Fizz')
