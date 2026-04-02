class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closedBrackets = new Map([[")", "("], ["]", "["], ["}", "{"]])

        for (let i = 0; i < s.length; i++) {
            const closedBracket = closedBrackets.get(s[i]);
            if (closedBracket) {
                if (stack.pop() !== closedBracket) {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
