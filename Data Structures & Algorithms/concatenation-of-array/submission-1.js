class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const size = nums.length;

        for (let i = size; i < size * 2; i++) {
            nums[i] = nums[i - size];
        }

        return nums;
    }
}
