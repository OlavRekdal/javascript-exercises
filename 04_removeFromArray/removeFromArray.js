const removeFromArray = function(arr, ...values) {
    let value = [...values]
    for ( var j = 0; j < value.length; j++ ) {
        for ( var i = 0; i < arr.length; i++ ) {
            // console.log(arr.length)
            if (arr[i] === value[j]) {
                index = i
                arr.splice(index, 1); 
                i--; // moves the elements in the array one left so it fits in the next iteration
                break; // breaks out of the inner loop, and start with the next ...value
            }
        }
    }
    return arr
};


// Do not edit below this line
module.exports = removeFromArray;
