class Solution {

    constructor () {
        this.cache = {};
    }

    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;

        let left;
        let right;

        if (this.cache[n - 1]) left = this.cache[n - 1];
        else {
            left = this.climbStairs(n - 1);
            this.cache[n - 1] = left;
        }
        if (this.cache[n - 2]) right = this.cache[n -2]
        else {
            right = this.climbStairs(n - 2);
            this.cache[n - 2] = right;
        }

        return left + right;
    }
}
