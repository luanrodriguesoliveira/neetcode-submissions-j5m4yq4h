class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = new Map();

        for (let i = 0; i < strs.length; i++) {
            const orderedString = strs[i].split("").sort().join();
            const current = group.get(orderedString);
            if (current) {
                current.push(strs[i]);
            }
            else {
                group.set(orderedString, [strs[i]]);
            }
        }

        return Array.from(group.values());
    }
}
