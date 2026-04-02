class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const memory = new Map();

        for (let i = 0; i < s.length; i++) {
            const currentValue = memory.get(s[i]);

            if (currentValue) {
                memory.set(s[i], currentValue + 1);
            } else {
                memory.set(s[i], 1);
            }
        }


        for (let i = 0; i < t.length; i++) {
            const currentValue = memory.get(t[i]);

            if (currentValue >= 1) {
                memory.set(t[i], currentValue - 1);
                
                if (currentValue - 1 === 0) {
                    memory.delete(t[i]);
                }
            } 
            else {
                return false;
            }
           
        }

       return memory.size === 0;
    }
}
