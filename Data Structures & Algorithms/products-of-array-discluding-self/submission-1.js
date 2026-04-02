class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const suffix = [];
        const res = [];

        prefix[0] = 1;
        suffix[nums.length - 1] = 1;

        for (let i = 1; i <= nums.length - 1; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}
 