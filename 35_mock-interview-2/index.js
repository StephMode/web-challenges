// The leet code challenge can be found here: https://leetcode.com/problems/two-sum/description/

const nums = [2, 7, 11, 15];
const target = 9;
// these were 2 sets of several given pairs of nums and target variables

//Solution 1:

/*
for (let i = 0; i < nums.length; i++) {
     for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }
    }
}
*/
// This is the brute force solution.
// It checks every possible pair of numbers in the array.
// If the sum of a pair equals the target, it returns their indices.
// While it works correctly, it has a time complexity of O(n^2), which means it becomes slow as the input size grows.

// Solution 2:

const dict = {}; // We initialize an empty object to store the indices of numbers we have seen so far.

for (let i = 0; i < nums.length; i++) {
  const current = nums[i]; // 'current' stores the value of the current element in the array during each iteration.
  const remainder = target - current; // 'remainder' is the difference between the target and the current element.

  // We check if the remainder exists in our 'dict' object (i.e., if we have already seen a number that, when added to the current number, equals the target).
  if (remainder in dict) {
    return [dict[remainder], i]; // If we find the remainder in 'dict', we return the stored index and the current index.
  } else {
    dict[current] = i; // // If the remainder is not found, we store the current number and its index in 'dict' for future reference.
  }
}

// Explanation of the logic:
// The optimized solution uses a hash map (the 'dict' object) to store numbers and their indices as we iterate through the array.
// For each number, we calculate the remainder (target - current).
// If this remainder has already been seen (i.e., it exists in 'dict'), we know that the current number and the previously seen number add up to the target.
// This approach has a time complexity of O(n), which is more efficient than the brute force approach.

/* Notes on challenge

Plan

1. Initialize const



2. Logic for finding indicies of specific elements in the array

find smth and loop through the array

we would repeat adding one element with the next until sum === target

we would need to have logic nested into logic

we will start with looping through a calculation with index 0




we don't need to go though the whole array of integers
once answer is found, return it


incremently test the code

in a challenge context on a platform like leetcode:
mind runtime, add clog if needed to constantly check if your logic works
but do remove them from your final solution


3. return indicies based on a given value




*/

/* meta notes on the mock interview

5-7 minutes for recap of problems
max 10 minutes


Process of getting errors and fixing them is actually a good thing in a interview
don't panic

*/
