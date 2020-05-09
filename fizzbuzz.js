function whatToSay(sequence){
  if(sequence%15===0) return 'FizzBuzz'
  
  if(sequence%3===0) return 'Fizz'
  if(sequence%5===0) return 'Buzz'

  return `${sequence}`
}

[1,2,4,7,8,11,13,14,16].forEach(sequence=>console.assert(whatToSay(sequence)===`${sequence}`, `第${sequence}个同学应该说${sequence}`))
[3,6,9,12, 96, 99].forEach(sequence=>console.assert(whatToSay(sequence)==='Fizz', `第${sequence}个同学应该说Fizz`))
[5,10, 85, 95].forEach(sequence=>console.assert(whatToSay(sequence)==='Buzz', `第${sequence}个同学应该说Buzz`))
[15, 30, 45, 60, 75, 90].forEach(sequence=>console.assert(whatToSay(sequence)==='FizzBuzz', `第${sequence}个同学应该说FizzBuzz`))

function printFullList(sequenceFrom, sequenceTo){
  for(let sequence = sequenceFrom; sequence <= sequenceTo; sequence++){
    console.log(whatToSay(sequence))
  }
}

printFullList(1, 100)
