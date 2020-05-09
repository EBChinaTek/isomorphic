function whatToSay(sequence){
  if(sequence===15) return 'FizzBuzz'
  
  if(sequence%3===0) return 'Fizz'
  if(sequence%5===0) return 'Buzz'

  return `${sequence}`
}

[1,2,4,7,8,11,13,14,16].forEach(sequence=>console.assert(whatToSay(sequence)===`${sequence}`, `第${sequence}个同学应该说${sequence}`))
[3,6,9,12].forEach(sequence=>console.assert(whatToSay(sequence)==='Fizz', `第${sequence}个同学应该说Fizz`)
[5,10].forEach(sequence=>console.assert(whatToSay(sequence)==='Buzz', `第${sequence}个同学应该说Buzz`)
console.assert(whatToSay(15)==='FizzBuzz', '第15个同学应该说FizzBuzz')
console.assert(whatToSay(30)==='FizzBuzz', '第30个同学应该说FizzBuzz')

