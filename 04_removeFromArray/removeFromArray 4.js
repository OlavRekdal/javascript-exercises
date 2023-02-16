const removeFromArray = function(arr, ...values) {
    let value = [...values]
        console.log(value)
    for ( var j = 0; j < value.length; j++ ) {
        for ( var i = 0; i < arr.length; i++ ) {
            if (arr[i] === value[j]) {
                index = arr[i - 1]
                arr.splice(index, 1); 
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
