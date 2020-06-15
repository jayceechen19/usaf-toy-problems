Array.prototype.isSubsetOf = function(arr) {
    var retVal = true
    for (var i=0; i<this.length; i++){
          retVal = arr.includes(this[i])
          if (!retVal){
              return retVal
          }
    }
    return retVal
};

const testIsSubsetOf = Array.prototype.isSubsetOf;