/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let window = 0
    let result = 0

    for (let i = 0; i< k; i++) {
        window+=nums[i]
    }

    result = window

    for (let i = k; i< nums.length; i++) {
        window = window + nums[i] - nums[i-k]
        if (window > result) {
            result = window
        }
    }

    return result/k

};