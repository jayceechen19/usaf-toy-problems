var firstNonRepeatedCharacter = function (string) {
    
    var object = {}
    
    if(string.length == 0){
        return null
    }
    for (var i=0; i<string.length; i++){
        if (object[string[i]] == undefined){
            object[string[i]] = 1

        }else{
            object[string[i]] += 1
        }
    }
    for (var letter in object){
        if (object[letter] == 1){
            return letter
        }
    }
    return null
  };

  console.log(firstNonRepeatedCharacter(`AABCAC`))