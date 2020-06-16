    function toEnglish(num) {
    var numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};
var numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion"
};

  // return my value as english words
    //If the value is less than 20, or divisible by ten
    //return the value from the object
    if (this < 20 || (this < 100 && this%10 == 0)){
        return numbersToWords[this]
    }
    else if (this.length >= 3){
        var returnWrd = ''
        var numTrcker = this
        //The tens place value is 10^length-1
        var tenVal = 10**(this.length-1)
        
        for (var i=0; i<this.length; i++){
            //Getting the number value first
            var numWrd = numbersToWords[this[i]]
            //Getting the place value next
            var placeWrd = numbersToPlace[tenVal]
            // Add the words to the string
            returnWrd += numWrd + " " + placeWrd
            console.log(returnWrd)
            //Decrement the number we are tracking
            numTrcker -= (this[i] * tenVal)
            //Decrease the tenVal
            tenVal /= 10
        }
        return returnWrd
        
        
    }
    
  
 
};

console.log(toEnglish(44))