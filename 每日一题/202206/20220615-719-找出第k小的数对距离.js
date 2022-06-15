/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let left = 0, right = nums[n - 1] - nums[0];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let cnt = 0;
        for (let i = 0, j = 0; j < n; j++) {
            while (nums[j] - nums[i] > mid) {
                i++;
            }
            cnt += j - i;
        }
        if (cnt >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    } 
    return left;   
};