const sumAll = function(num1, num2) {
    var numArray = []; 
    for ( j = num1; j <= num2; j++ ) {
        numArray.push(j); 
    }

    // console.log(numArray); 

    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
        
    }
    // console.log(sum); 
    return sum
};


// Do not edit below this line
module.exports = sumAll;
