
/*function is_prime(n)
    if n ≤ 3 then
        return n > 1
    else if n mod 2 = 0 or n mod 3 = 0
        return false

    let i ← 5

    while i × i ≤ n do
        if n mod i = 0 or n mod (i + 2) = 0
            return false
        i ← i + 6

    return true
    */
var primeTester = function (n) {
    //TO DO: Implement me! 
    //Prime is if the number is only divsible by 1 and itself
    if (n <= 3 ){
        return n > 1
    }
    else if (n%2 == 0 || n%3 == 0){
        return false
    }
    var i = 5
    while(i**2 <= n){
        if (n % i == 0 || n % (i+2) == 0){
            return false
        }
        i += 6
    }
    return true
};

// console.log(primeTester(2))
// console.log(primeTester(1))
// console.log(primeTester(15485867))

console.log(primeTester(2971215073 * 2971215073))
/*algorithm Sieve of Eratosthenes is
    input: an integer n > 1.
    output: all prime numbers from 2 through n.

    let A be an array of Boolean values, indexed by integers 2 to n,
    initially all set to true.
    
    for i = 2, 3, 4, ..., not exceeding √n do
        if A[i] is true
            for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n do
                A[j] := false

    return all i such that A[i] is true. */

 var primeSieve = function (start, end) {
        /* UNCOMMENT FOR EXTRA CREDIT & WRITE YOUR CODE HERE*/
    var array = new Array(end + 1)
    array.fill(true)

    array[1] = false

    var sqRt = Math.floor(Math.sqrt(end))
    console.log(sqRt)
    for (var i=2; i<=sqRt; i++){
        if (array[i]){
             for (var j= i**2; j <= end; j+=i){
                array[j] = false
            }
        }
       
    }
    var rtnArr = []
    for (var i = start; i<= end; i++){
        if(array[i]){
            rtnArr.push(i)
        }
    }
    return rtnArr
};

primeSieve(23,29)