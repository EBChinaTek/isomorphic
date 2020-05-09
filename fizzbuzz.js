function whatToSay(sequence){
  if(sequence%3===0) return 'Fizz'
  if(sequence===5) return 'Buzz'
  if(sequence===10) return 'Buzz'
  return `${sequence}`
}
console.assert(whatToSay(5)==='Buzz', '第五个同学应该说Buzz')
[1,2,4,7,8,11,13,14,16].forEach(sequence=>console.assert(whatToSay(sequence)===`${sequence}`, `第${sequence}个同学应该说${sequence}`))
[3,6,9,12].forEach(sequence=>console.assert(whatToSay(sequence)==='Fizz', `第${sequence}个同学应该说Fizz`)
console.assert(whatToSay(10)==='Buzz', '第十个同学应该说Buzz')
