/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    longestConsecutive(root) {
        let maxSequence = 1;

        const dfs = (node, streak, parent) => {
            if (!node) return;

            if (parent) {
                if (node.val === parent.val + 1) {
                streak++;

                if (streak > maxSequence) maxSequence = streak;
                } 
                else {
                    streak = 1; 
                }
            }
            
            dfs(node.right, streak, node);
            dfs(node.left, streak, node);
        } 

        dfs(root, 1, null);
        return maxSequence;
    }
}
