class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let left = 0;
        const initialSize = nums.length;

        for (let right = initialSize; right < initialSize * 2; right++) {
            nums.push(nums[left]);
            left++;
        }

        return nums;
    }
}
