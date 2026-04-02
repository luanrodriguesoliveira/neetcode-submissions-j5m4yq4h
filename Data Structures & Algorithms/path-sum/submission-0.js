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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        let result = false;

        const dfs = (root, currentSum) => {
            if (!root) return;

            currentSum += root.val;
            if ((!root.left && !root.right) && currentSum === targetSum) {
                result = true;
                return;
            }
            
            dfs(root.left, currentSum);
            dfs(root.right, currentSum);
        }

        dfs(root, 0);

        return result; 
    }
}
