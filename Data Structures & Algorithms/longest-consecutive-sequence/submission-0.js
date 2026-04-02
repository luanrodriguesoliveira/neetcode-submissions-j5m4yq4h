class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set();
        let longest = 0;

        for (const num of nums) {
            numbers.add(num);
        }

        for (let num of numbers) {
            if(!numbers.has(num - 1)) {
                let next = num + 1;
                let sequence = 1;
                while (numbers.has(next)) {
                    sequence++;
                    next++;
                }
                if (sequence > longest) longest = sequence;
            }
        }



        return longest;
    }
}
