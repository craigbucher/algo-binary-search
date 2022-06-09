function binarySearch(inputArray, target) {
    // create a duplicate of input to work with
    let workingArray = inputArray;
    // iterate over the input array
    for (let i = 0; i < inputArray.length; i++) {
        // calculate midpoint of array
        let midpointIndex = Math.floor(inputArray.length / 2);
        let midpoint = workingArray[midpointIndex];
        // compare value of midpoint to value of target
        if (midpoint > target) {
            // if greater than target, remove second half of array and re-iterate
            workingArray = workingArray.slice(0, midpointIndex);
        } else if (midpoint <
            target) {
            // if less than target, remove first half of array ad re-iterate
            workingArray = workingArray.slice(midpointIndex, -1);
        } else if (midpoint = target) {
            // if equal to the target, return the index value
            return 'target found at index ' + inputArray.indexOf(midpoint);
        }
    }
    // if value not found, return null
    return null;
}
}

let smallArray = [1, 2, 3, 4, 5]
let largeArray = [1, 5, 7, 2, 3, 8, 4, 9]

console.log(binarySearch(1, smallArray) === 0);
console.log(binarySearch(2, smallArray) === 1);
console.log(binarySearch(3, smallArray) === 2);
console.log(binarySearch(4, smallArray) === 3);
console.log(binarySearch(5, smallArray) === 4);
console.log(binarySearch(7, largeArray) === 5);