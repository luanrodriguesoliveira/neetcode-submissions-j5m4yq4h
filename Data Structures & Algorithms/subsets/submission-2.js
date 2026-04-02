class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        
        const backtrack = (index, subset) => {
            if (index === nums.length) {
                result.push(Array.from(subset));
                return;
            }

            subset.push(nums[index]);
            backtrack(index + 1, subset);
            subset.pop();
            backtrack(index + 1, subset);
        }

        backtrack(0, []);

        return result; 
    }
}
