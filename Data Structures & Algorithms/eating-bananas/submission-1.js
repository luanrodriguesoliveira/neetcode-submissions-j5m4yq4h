class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            let totalHours = 0;

            for (let i = 0; i < piles.length; i++) {
                const total = Math.ceil(piles[i]/mid);
                totalHours+= total;
            }

            if (totalHours > h) {
                left = mid + 1;
            } 
            else if (totalHours <= h) {
                right = mid;
            } 
        }

        return left;
    }
}
