function whatToSay(sequence){
  if(sequence===3) return 'Fizz'
  return `${sequence}`
}

console.assert(whatToSay(1)==='1', '第一个同学应该说1')
console.assert(whatToSay(2)==='2', '第二个同学应该说2')
console.assert(whatToSay(3)==='Fizz', '第三个同学应该说Fizz')
