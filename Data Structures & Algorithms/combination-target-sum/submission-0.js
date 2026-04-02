class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const results = [];

        const backtrack = (index, path, currentSum) => {
            if (index === nums.length) {
                return;
            }

            if (currentSum === target) {
                results.push(Array.from(path));
                return;
            }

            if (currentSum > target) {
                return;
            }

            path.push(nums[index]);
            backtrack(index, path, currentSum + nums[index]);
            path.pop();
            backtrack(index + 1, path, currentSum);
        }

        backtrack(0, [], 0);

        return results;
    }
}
