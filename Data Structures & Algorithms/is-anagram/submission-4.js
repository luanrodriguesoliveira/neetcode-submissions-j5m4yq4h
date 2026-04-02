class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const memory = new Map(); 

        for (let i = 0; i < s.length; i++) {
            const value = memory.get(s[i]);

            if (value === undefined) {
                memory.set(s[i], 1);
            }
            else {
                memory.set(s[i], value + 1);
            }
        }

        for (let i = 0; i < t.length; i++) {
            const value = memory.get(t[i]);

            if (!value) {
                return false;
            }
            else if (value > 1) {
                memory.set(t[i], value - 1);
            }
            else if (value === 1) {
                memory.delete(t[i]);
            }
        }

        return memory.size === 0;
    }
}
