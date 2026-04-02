class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let commomPrefix = "";
        let j = 0;

        while (j <= strs[0].length) {
            const prefix = strs[0].substring(0, j);
            let isPrefixCommom = true;
            for (let i = 1; i < strs.length; i++) {
                if (strs[i].substring(0, j) !== prefix) {
                    isPrefixCommom = false;
                }
            }
            if(isPrefixCommom) commomPrefix = prefix;
            j++;
        }

        return commomPrefix;
    }
}
