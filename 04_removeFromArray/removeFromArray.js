const removeFromArray = function(arr, value) {
    for ( var i = 0; i < arr.length; i++ ) {
        if (arr[i] === value) {
            index = arr[i - 1]
            arr.splice(index, 1); 
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
