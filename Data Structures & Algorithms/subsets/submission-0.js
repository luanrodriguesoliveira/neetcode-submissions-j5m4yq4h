class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];

        for (let n = 0; n < nums.length; n++) {
            const size = 2**n;

            for (let i = 0; i < size; i++) {
                result.push(result[i].concat(nums[n]));
            }
        }

        return result;
    }
}
