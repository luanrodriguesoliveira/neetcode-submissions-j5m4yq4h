class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencies = new Map();
        const queue = new MaxPriorityQueue((item) => item.frequency);

        for (const n of nums) {
            const frequency = frequencies.get(n);

            if (frequency) {
                frequencies.set(n, frequency + 1);
            }
            else {
                frequencies.set(n, 1);
            }
        }

        for (const [key, value] of frequencies) {
            queue.push({ value: key, frequency: value });
        }

        const result = [];

        while (result.length < k) {
            result.push(queue.pop().value);
        }

        return result; 
    }
}
