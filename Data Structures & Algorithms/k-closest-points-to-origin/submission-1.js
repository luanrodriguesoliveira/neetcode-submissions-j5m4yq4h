/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */



class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((point) => point[0]);

        for (const [x, y] of points) {
            const distance = x ** 2 + y ** 2;
            minHeap.enqueue([distance, x, y]);
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [_, x, y] = minHeap.dequeue();
            res.push([x, y]);
        }

        return res;
    }
}
