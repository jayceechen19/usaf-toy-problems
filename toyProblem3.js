var bubbleSort = function(array) {

    var compare = (indexL, indexR, array) => {
        var lVal = array[indexL]
        var rVal = array[indexR]
        if (lVal > rVal){
            array[indexL] = rVal
            array[indexR] = lVal
        }
        return array
    }
    var test = (array) => {
        for (var i =0; i<array.length-1; i++){
            if (array[i] > array[i+1]){
                return false
            }
        }
        return true
    }
    
    for (var i =0; i< array.length - 1; i++){
        var rtnArr = compare(i, i+1, array)
        
    }

    if (test(rtnArr)){
        return rtnArr
    }else{
        return bubbleSort(rtnArr)
    }
    
};

var array = bubbleSort([ 1, 100, 100, 2, 21, 21, 43 ])
console.log(array)
// var array = bubbleSort([ 100, 100, 23, 24.3, 24.7, 25, 3, 3, 9 ])
// console.log(array)
// var array = bubbleSort([ -10, -10.1, 2, 20, 299, 4 ])
// console.log(array)
// //Complexity is O(n^n)