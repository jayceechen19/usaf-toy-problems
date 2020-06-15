var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var translateRomanNumeral = function (romanNumeral) {
    // TODO: Implement me!
    var sum = 0;
    if(romanNumeral === undefined){
        return 0
    }else if(typeof(romanNumeral) != 'string'){
        return null
    }
    var i = 0
   while (i < romanNumeral.length){
        var num1 = romanNumeral[i]
        if(i !== romanNumeral.length - 1){
            var num2 = romanNumeral[i+1]
            if (DIGIT_VALUES[num1] < DIGIT_VALUES[num2]){
                sum += (DIGIT_VALUES[num2] - DIGIT_VALUES[num1])
                i += 2
            }
            else{
                sum += DIGIT_VALUES[num1]
                i++
            }
        }
        else{
            sum += DIGIT_VALUES[num1]
            i++
        }
        
    }
    return sum
        
    }
 console.log(translateRomanNumeral('MCMLIV'))