//Input: num
//Output: num reversed
function reverseInteger(number) {
    if (number < 0){
        return 'Number is invalid'
    }

    // Num size is unknown so we need recursion
    var placeholder1 = 1;
    // If the number/the digit place size is > 10
    // keep incrementing the tens value until the result in < 10
    while (Math.floor(number/placeholder1) >= 10){
        placeholder1 *= 10;
    }


    // Take the number and divide it by the max tens digit size
    // e.g. 10,000 , 1,000 , 100 , 10 , 1
    // Take the integer and multiply it by a separate placeholder val that starts from 1
    // Add the integer to the result
    // Subtract integer * placeholder1 from the number
    // Divide the placeholder1 by 10
    // Mult the placeholder2 by 10
    // Repeat the process until the number = 0 || placeholder1 < 1
    var result = 0
    var placeholder2 = 1
    while (number !== 0){
        var newNum = Math.floor(number/placeholder1)

        var input = newNum * placeholder2
        result += input

        number -= newNum * placeholder1
        placeholder1 = Math.floor(placeholder1 /10)
        placeholder2 = Math.floor(placeholder2 * 10)
        

    }
    return result

  }

  var int1 = reverseInteger(4)
  console.log(int1)
  var int2 = reverseInteger(132)
  console.log(int2)
  var int3 = reverseInteger(10532)
  console.log(int3)
  var int4 = reverseInteger(-3)
  console.log(int4)