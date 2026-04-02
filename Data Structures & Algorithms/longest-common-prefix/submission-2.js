class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let commomPrefix = "";

        for (let i = 0; i < strs[0].length; i++) {
            let letter = strs[0][i];
            
            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] !== letter) {
                    return commomPrefix;
                }
            }

            commomPrefix+= letter;
        }
        

        return commomPrefix;
    }
}
