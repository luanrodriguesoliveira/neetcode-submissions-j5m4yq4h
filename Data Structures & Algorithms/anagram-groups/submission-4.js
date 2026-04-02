class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for (const s of strs) {
            const word = s.split("").sort().join("");

            const existingWord = hashMap.get(word);

            if (existingWord !== undefined) {
                existingWord.push(s);
            }
            else {
                hashMap.set(word, [s]);
            }
        }

        return Array.from(hashMap.values());
    }
}
