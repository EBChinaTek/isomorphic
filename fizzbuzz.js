function whatToSay(sequence){
  if(sequence%3===0) return 'Fizz'
  if(sequence===5) return 'Buzz'
  return `${sequence}`
}

console.assert(whatToSay(1)==='1', '第一个同学应该说1')
console.assert(whatToSay(2)==='2', '第二个同学应该说2')
console.assert(whatToSay(3)==='Fizz', '第三个同学应该说Fizz')
console.assert(whatToSay(4)==='4', '第四个同学应该说4')
console.assert(whatToSay(5)==='Buzz', '第五个同学应该说Buzz')
console.assert(whatToSay(6)==='Fizz', '第六个同学应该说Fizz')
