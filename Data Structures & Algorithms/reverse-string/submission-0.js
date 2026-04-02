class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let y = s.length - 1;

        for (let x = 0; x < y; x++) {
            const temp = s[x];
            s[x] = s[y];
            s[y] = temp;
            y--;
        }

        return s; 
    }
}
