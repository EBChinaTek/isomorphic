function divisible(dividend, divisor){
  return dividend%divisor===0
}


function contains(number, digitValue){
  return `${number}`.indexOf(`${digitValue}`)>=0
}


console.assert(contains(51, 5))

function whatToSay(sequence){
  const devisibleByThree = divisible(sequence, 3)
  const divisibleByFive = divisible(sequence, 5)
  const containsThree = contains(sequence, 3)
  const containsFive = contains(sequence, 5)
  const fizzBuzz = []
  if(devisibleByThree || containsThree) fizzBuzz.push('Fizz')
  if(divisibleByFive || containsFive) fizzBuzz.push('Buzz')
  if(fizzBuzz.length)return fizzBuzz.join('')
  return `${sequence}`
}
                   
[1,2,4,7,8,11,14,16].forEach(sequence=>console.assert(whatToSay(sequence)===`${sequence}`, `第${sequence}个同学应该说${sequence}`));
[3,6,9,12,13,23, 31,33,83, 96, 99].forEach(sequence=>console.assert(whatToSay(sequence)==='Fizz', `第${sequence}个同学应该说Fizz`));
[5,10,52, 85, 95].forEach(sequence=>console.assert(whatToSay(sequence)==='Buzz', `第${sequence}个同学应该说Buzz`));
[15, 30, 35, 45,51, 53, 60, 75, 90].forEach(sequence=>console.assert(whatToSay(sequence)==='FizzBuzz', `第${sequence}个同学应该说FizzBuzz`));


function printFullList(sequenceFrom, sequenceTo){
  for(let sequence = sequenceFrom; sequence <= sequenceTo; sequence++){
    console.log(whatToSay(sequence));
  }
}

printFullList(1, 100);
