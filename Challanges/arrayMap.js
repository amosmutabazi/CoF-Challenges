// Challenges/arrayMap.js
function hasContiguousSubarray(arr, target) {
    if (arr.length === 0 || target === 0) {
    return false;
    }

    let currentSum = 0;
    const sumMap = new Map();
  sumMap.set(0, -1); // Handle edge case where target is 0

    for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (sumMap.has(currentSum - target)) {
        return true;
    }

    sumMap.set(currentSum, i);
    }

    return false;
}

// Test cases
console.log(hasContiguousSubarray([4, 2, 7, 1, 9, 5], 17)); // Output: true
//console.log(hasContiguousSubarray([1, 2, 3, 4, 5], 9)); // Output: true
//console.log(hasContiguousSubarray([1, 2, 3, 4, 5], 15)); // Output: true
//console.log(hasContiguousSubarray([1, 2, 3, 4, 5], 20)); // Output: false
