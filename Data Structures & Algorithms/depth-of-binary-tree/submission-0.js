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
    maxDepth(root) {
        const preorder = (node) => { 
            if (node === null) {
                return 0;
            }

           const leftDepth = preorder(node.left);
           const rightDepth = preorder(node.right);

            return Math.max(leftDepth, rightDepth) + 1;
        }

        return preorder(root);
    }
}
