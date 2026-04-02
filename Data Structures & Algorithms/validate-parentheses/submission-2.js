class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closingBrackets = new Map([
            [")", "("],
            ["}", "{"],
            ["]", "["]
        ]);

        for (let i = 0; i < s.length; i++) {
            if(!closingBrackets.get(s[i])) {
                stack.push(s[i]);
            } else {
                const x = closingBrackets.get(s[i]);
                if (!x || x !== stack.pop()) {
                    return false
                }
            }
        }

        return stack.length === 0; 
    }
}
