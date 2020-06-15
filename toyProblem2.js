

var toFraction = function(number) {
    // Your code here
    //Get the decimals only e,g. 3.25 -> 0.25
    var decimals = number % 1
    // Get the length of the decimal and assign it as the power of ten
    var powStr = decimals.toString()
    var pow = powStr.slice(2, powStr.length).length
    //Multiply the decimal by 10^pow for numerator
    var nmtr = decimals * (10**pow)
    //Assign denominator to 10^pow
    var denom = 10**pow 

    //Function that calculates GCD; Euclid's algorithm
    function gcd(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
          return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
          var t = y;
          y = x % y;
          x = t;
        }
        return x;
    }

    //Find the GCD
    var gcd = Math.ceil(gcd(nmtr, denom))
    //Figure out if ther is a whole number to add
    var wholeNum = number - decimals
    //Multiple wholeNum by denom and add it to the nmtr
 
    var denom = denom/gcd
    var nmtr = Math.floor(nmtr/gcd + wholeNum*denom)
    

    var fraction = nmtr.toString()+'/'+denom.toString()
    return fraction

  };

 

//   var result = toFraction(0.5)
//   console.log(result)
//   result = toFraction(3.5)
//   console.log(result)
//   result = toFraction(2.5)
//   console.log(result)
  result = toFraction(0.25313)
  console.log(result)